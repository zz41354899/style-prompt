import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Circle, Square, Triangle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S17BauhausModernismPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#F2EFEC', // Warmer Paper
        text: { primary: '#1A1A1A', secondary: '#2A2A2A', muted: '#4D4D4D' },
        brand: {
            red: '#D93025', // Bauhaus Red
            blue: '#1A4FBA', // Bauhaus Blue
            yellow: '#FFC804', // Bauhaus Yellow
            black: '#1A1A1A'
        },
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen selection:bg-brand-red selection:text-white"
            style={{
                backgroundColor: colors.bg,
                color: colors.text.primary,
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                letterSpacing: '-0.02em'
            }}>
            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 transition-all duration-300"
                style={{ backgroundColor: colors.bg, borderBottom: `8px solid ${colors.brand.black}` }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ padding: '24px' }}>
                    <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="relative w-12 h-12 border-4 border-black group-hover:rotate-90 transition-transform duration-500">
                            <div className="absolute top-0 left-0 w-1/2 h-1/2" style={{ backgroundColor: colors.brand.red }} />
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full" style={{ backgroundColor: colors.brand.blue }} />
                        </div>
                        <span style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-0.05em' }}>BAU_STIL</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['WERK', 'MANIFEST', 'STUDIO', 'KONTAKT'].map((item) => (
                                <span key={item} className="cursor-pointer relative font-bold transition-all hover:text-brand-red"
                                    style={{ fontSize: '13px', letterSpacing: '0.15em' }}>
                                    {item}
                                    <div className="absolute -bottom-1 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all" />
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-6">
                        <button className="hidden md:block px-8 py-3 font-black transition-all hover:bg-black hover:text-white border-4 border-black"
                            style={{ fontSize: '13px', letterSpacing: '0.1em' }}>
                            START_JETZT
                        </button>
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-4 border-black">
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="animate-in slide-in-from-top-4 duration-300" style={{ borderTop: `4px solid ${colors.brand.black}`, padding: '32px', backgroundColor: colors.bg }}>
                        {['WERK', 'MANIFEST', 'STUDIO', 'KONTAKT'].map((item) => (
                            <div key={item} className="py-4 text-2xl font-black border-b-4 border-black last:border-b-0">{item}</div>
                        ))}
                        <button className="w-full mt-8 py-5 bg-black text-white font-black text-lg">
                            JETZT_STARTEN
                        </button>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `80px ${spacing.lg}`, borderBottom: `12px solid ${colors.brand.black}`, position: 'relative' }}>
                <div className="absolute top-0 right-20 w-32 h-full bg-black/5" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1.3fr 0.7fr', gap: '80px' }}>
                        <div className="flex flex-col justify-center">
                            <div className="flex gap-4 mb-12 items-center">
                                <div className="w-4 h-4 rounded-full bg-red-600" />
                                <div className="w-4 h-4 bg-blue-600" />
                                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-yellow-400 border-r-[8px] border-r-transparent" />
                                <span className="font-bold uppercase tracking-[0.3em] text-sm">Design Manifesto 01</span>
                            </div>
                            <h1 style={{ fontSize: isMobile ? '64px' : '120px', fontWeight: 900, lineHeight: 0.8, marginBottom: '56px', letterSpacing: '-0.04em' }}>
                                <span className="block text-transparent stroke-black text-stroke-2 hover:text-black transition-colors duration-300">LESS</span>
                                <span className="block pl-12">IS</span>
                                <span className="inline-block bg-yellow-400 px-6 transform -rotate-2 border-4 border-black box-shadow-hard ml-4">MORE</span>
                            </h1>
                            <p style={{ fontSize: '24px', lineHeight: 1.5, color: colors.text.primary, marginBottom: '64px', maxWidth: '540px', fontWeight: 700, borderLeft: `8px solid ${colors.brand.red}`, paddingLeft: '32px' }}>
                                Functional design that rejects the ornamental. Pure geometry for the modern age.
                            </p>
                            <div className="flex gap-0" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="h-20 px-12 bg-black text-white font-black hover:bg-red-600 hover:scale-105 transition-all text-xl uppercase tracking-widest border-4 border-black">
                                    Start Now
                                </button>
                                <button className="h-20 px-12 bg-white text-black font-black hover:bg-blue-600 hover:text-white transition-all text-xl uppercase tracking-widest border-y-4 border-r-4 border-black">
                                    Explore
                                </button>
                            </div>
                        </div>

                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-neutral-200 rounded-full border-[12px] border-black overflow-hidden group">
                                <div className="absolute w-full h-1/2 top-0 bg-yellow-400 border-b-[12px] border-black transition-transform duration-700 group-hover:-translate-y-full" />
                                <div className="absolute w-1/2 h-full left-0 bg-blue-600 border-r-[12px] border-black transition-transform duration-700 delay-100 group-hover:-translate-x-full" />
                                <div className="absolute w-1/2 h-1/2 bottom-0 right-0 bg-red-600 transition-transform duration-700 delay-200 group-hover:translate-x-full group-hover:translate-y-full" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                                    <span className="text-4xl font-black tracking-tighter">BAUHAUS</span>
                                </div>
                            </div>
                            {/* Decorative Grid */}
                            <div className="absolute -z-10 -bottom-12 -right-12 w-full h-full border-[4px] border-black/10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== MANIFESTO ========== */}
            <section style={{ padding: '120px 24px', backgroundColor: colors.brand.black, color: '#FFF', position: 'relative', overflow: 'hidden' }}>
                <div className="absolute top-0 right-0 w-1/4 h-full" style={{ backgroundColor: colors.brand.blue, opacity: 0.2 }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12" style={{ backgroundColor: colors.brand.red }} />
                        <div className="w-12 h-12 rounded-full" style={{ backgroundColor: colors.brand.yellow }} />
                    </div>
                    <h2 style={{ fontSize: isMobile ? '40px' : '88px', fontWeight: 900, lineHeight: 1, marginBottom: '40px', letterSpacing: '-0.05em' }}>
                        "DIE FORM FOLGT<br />
                        DER FUNKTION."
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <p className="max-w-md font-bold" style={{ fontSize: '18px', color: '#888' }}>
                            The ultimate goal of all visual activity is the building. The decoration of the building was once the noblest function of fine arts.
                        </p>
                        <span className="font-black italic" style={{ fontSize: '14px', letterSpacing: '0.3em', color: colors.brand.red }}>— WALTER GROPIUS</span>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, borderBottom: `12px solid ${colors.brand.black}` }}>
                <div className="max-w-7xl mx-auto text-center mb-24 relative">
                    <h2 style={{ fontSize: isMobile ? '40px' : '96px', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.9 }}>
                        KERN<br />ELEMENTE
                    </h2>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply opacity-50 pointer-events-none" />
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', border: `12px solid ${colors.brand.black}` }}>
                        {[
                            { shape: Circle, color: colors.brand.blue, title: 'GEOMETRIE', desc: 'The circle is the most pure of all forms.' },
                            { shape: Square, color: colors.brand.red, title: 'STRUKTUR', desc: 'Order is the foundation of artistic creation.' },
                            { shape: Triangle, color: colors.brand.yellow, title: 'LOGIK', desc: 'Reason over emotion. Purpose over decoration.' },
                        ].map((item, i) => (
                            <div key={item.title} className="group transition-all hover:bg-black hover:text-white"
                                style={{
                                    padding: '64px 40px',
                                    borderRight: isMobile ? 'none' : i < 2 ? `12px solid ${colors.brand.black}` : 'none',
                                    borderBottom: isMobile && i < 2 ? `12px solid ${colors.brand.black}` : 'none'
                                }}>
                                <div className="mb-10 w-24 h-24 mx-auto border-[6px] border-black group-hover:border-white transition-all flex items-center justify-center bg-white shadow-[8px_8px_0_#000] group-hover:shadow-[8px_8px_0_#FFF]">
                                    <item.shape size={48} className="transition-transform group-hover:rotate-180 duration-700" style={{ color: item.color, fill: item.color }} />
                                </div>
                                <h3 className="font-black mb-6 uppercase" style={{ fontSize: '32px', letterSpacing: '-0.02em' }}>{item.title}</h3>
                                <p style={{ fontSize: '18px', lineHeight: 1.4, fontWeight: 500 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: '#FFFFFF', borderBottom: `12px solid ${colors.brand.black}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-24 border-b-[12px] border-black pb-8">
                        <h2 style={{ fontSize: isMobile ? '40px' : '120px', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.8, color: colors.brand.black }}>TARIFE</h2>
                        {!isMobile && <div className="w-32 h-32 bg-blue-600 rounded-full" />}
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', border: `12px solid ${colors.brand.black}`, backgroundColor: colors.brand.black, gap: '12px' }}>
                        {[
                            { name: 'ENTWURF', price: '$29', color: colors.brand.yellow, features: ['Basiswerkzeuge', 'Updates', 'Support'] },
                            { name: 'MEISTER', price: '$99', color: colors.brand.red, features: ['Alle Werkzeuge', 'Priorität', 'Zertifikat'] },
                            { name: 'AKADEMIE', price: '$299', color: colors.brand.blue, features: ['Team Werkzeug', 'Workshops', 'Direktleitung'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="flex flex-col relative group"
                                style={{
                                    padding: '64px 40px',
                                    backgroundColor: colors.bg,
                                    color: colors.text.primary,
                                }}>
                                <div className="absolute top-0 left-0 w-full h-4" style={{ backgroundColor: plan.color }} />

                                <div className="mb-12 flex items-center justify-between">
                                    <div className="w-16 h-16 border-[6px] border-black transition-transform group-hover:rotate-12" style={{ backgroundColor: plan.color }} />
                                    {i === 1 && <span className="px-4 py-2 bg-black text-white font-black text-xs tracking-widest uppercase transform rotate-2">Empfohlen</span>}
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>{plan.name}</h3>
                                <div className="flex items-baseline mb-12">
                                    <span style={{ fontSize: '80px', fontWeight: 900, lineHeight: 0.9 }}>{plan.price}</span>
                                </div>
                                <ul className="space-y-6 mb-16 flex-grow">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-4 font-bold" style={{ fontSize: '16px' }}>
                                            <div className="w-3 h-3 bg-black" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full h-16 bg-white border-[6px] border-black font-black text-lg transition-all hover:bg-black hover:text-white uppercase tracking-widest">
                                    AuswÄhlen
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, borderBottom: `12px solid ${colors.brand.black}` }}>
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-start mb-24">
                        <h2 className="bg-black text-white px-8 py-4 inline-block" style={{ fontSize: isMobile ? '40px' : '64px', fontWeight: 900, letterSpacing: '-0.05em' }}>FRAGEN?</h2>
                    </div>

                    <div style={{ borderTop: `12px solid ${colors.brand.black}` }}>
                        {[
                            { q: 'What is Bauhaus?', a: 'Bauhaus was a radical concept for its time, unifying fine art, craft, and technology in a single progressive school.' },
                            { q: 'Geometric forms?', a: 'Universal clarity. Shapes like circles and squares represent a timeless language that transcends borders and culture.' },
                            { q: 'Modern design?', a: 'The principles of the Bauhaus foundation continue to underpin contemporary digital interfaces and spatial architecture.' },
                        ].map((item, i) => (
                            <div key={i} className="transition-all hover:bg-white group"
                                style={{ borderBottom: `4px solid ${colors.brand.black}`, backgroundColor: expandedFaq === i ? 'white' : 'transparent' }}>
                                <button className="w-full flex items-center justify-between p-10 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                                        <span className="inline-block w-16 text-red-600">0{i + 1}.</span>
                                        {item.q}
                                    </span>
                                    <div className="w-16 h-16 border-[6px] border-black flex items-center justify-center transition-all bg-yellow-400 group-hover:bg-black group-hover:text-white"
                                        style={{ transform: expandedFaq === i ? 'rotate(90deg)' : 'none' }}>
                                        {expandedFaq === i ? <X size={32} /> : <ArrowRight size={32} />}
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-left-4" style={{ padding: '0 40px 40px', fontSize: '20px', fontWeight: 700, lineHeight: 1.4, maxWidth: '800px', marginLeft: '64px' }}>
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: '120px 24px', backgroundColor: colors.brand.red, color: '#FFF', position: 'relative', overflow: 'hidden' }}>
                <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-black opacity-10 -rotate-12 translate-y-1/2" />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="flex justify-center gap-12 mb-16 items-center">
                        <div className="w-20 h-20 border-8 border-white bg-black rotate-12" />
                        <div className="w-24 h-24 rounded-full bg-yellow-400" />
                        <Square size={64} fill="white" style={{ rotate: '-15deg', color: 'white' }} />
                    </div>
                    <h2 style={{ fontSize: isMobile ? '48px' : '96px', fontWeight: 900, marginBottom: '32px', lineHeight: 0.9 }}>STARTEN_SIE_DIE_REISE</h2>
                    <p className="mx-auto" style={{ fontSize: '20px', fontWeight: 700, marginBottom: '56px', maxWidth: '600px', opacity: 0.9 }}>Building the future with geometric precision. Join the movement.</p>
                    <button className="px-16 py-6 bg-black text-white font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-[-16px_16px_0_#FFF] hover:shadow-[-24px_24px_0_#FFF] border-4 border-white">
                        JETZT_ERSTELLEN
                    </button>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: '80px 24px', borderTop: `16px solid ${colors.brand.black}` }}>
                <div className="max-w-7xl mx-auto flex justify-between items-start gap-12" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-4 h-4" style={{ backgroundColor: colors.brand.red }} />
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.brand.blue }} />
                            <span style={{ fontSize: '24px', fontWeight: 900, marginLeft: '8px' }}>BAU_STIL</span>
                        </div>
                        <p className="max-w-xs font-bold leading-relaxed" style={{ color: colors.text.muted }}>
                            State of the art design principles for the modern digital landscape. Est. 1919 / 2025.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                        <div>
                            <div className="font-black mb-6 text-xs tracking-widest uppercase">Werk</div>
                            {['Projekte', 'Studio', 'Manifest'].map(item => (
                                <div key={item} className="mb-3 font-bold text-sm cursor-pointer hover:text-red-600">{item}</div>
                            ))}
                        </div>
                        <div>
                            <div className="font-black mb-6 text-xs tracking-widest uppercase">System</div>
                            {['Git', 'Kernel', 'Shell'].map(item => (
                                <div key={item} className="mb-3 font-bold text-sm cursor-pointer hover:text-blue-600">{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-4 uppercase font-black" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
                        <span>© 2025 BAU_STIL://PRO</span>
                        <span style={{ color: colors.brand.red }}>FORM_FOLLOWS_FUNCTION</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
