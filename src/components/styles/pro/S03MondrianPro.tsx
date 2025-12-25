import { useState } from 'react';
import { Menu, X, Check, ArrowRight, ChevronDown, ChevronUp, Grid, Palette, Box, Layout, PenTool, Type, Move } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S03MondrianPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // S03 Mondrian Design Tokens
    const colors = {
        bg: '#FFFFFF',
        primary: '#111111',
        red: '#D92525',
        blue: '#0059A9',
        yellow: '#F0C233',
        gray: '#F0F0F0'
    };

    const spacing = responsive.spacing;
    const border = { width: '3px', style: 'solid', color: '#111111' }; // Thicker, bolder lines

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.primary, fontFamily: '"Helvetica Neue", Arial, sans-serif' }}>
            {/* ========== 1. GLOBAL NAVIGATION ========== */}
            <header style={{ borderBottom: `${border.width} ${border.style} ${border.color}` }}>
                <div className="max-w-6xl mx-auto flex items-stretch justify-between" style={{ minHeight: '80px' }}>
                    <div className="flex items-center gap-4 px-6" style={{ borderRight: !isMobile ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                        <div className="flex gap-1" style={{ border: `${border.width} ${border.style} ${border.color}`, padding: '4px' }}>
                            <div style={{ width: '12px', height: '12px', backgroundColor: colors.red }} />
                            <div style={{ width: '12px', height: '12px', backgroundColor: colors.blue }} />
                            <div style={{ width: '12px', height: '12px', backgroundColor: colors.yellow }} />
                        </div>
                        <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>STUDIO</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex-1 flex items-stretch">
                            {['Architecture', 'Furniture', 'Theory', 'Shop'].map((item) => (
                                <a key={item} className="flex items-center px-8 hover:bg-gray-50 transition-colors" style={{ borderRight: `${border.width} ${border.style} ${border.color}`, fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}>
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-stretch">
                        {!isMobile && (
                            <button style={{ padding: '0 32px', border: 'none', borderLeft: `${border.width} ${border.style} ${border.color}`, backgroundColor: colors.yellow, fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>
                                Join
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} style={{ padding: '0 24px', border: 'none', borderLeft: `${border.width} ${border.style} ${border.color}`, background: 'none', cursor: 'pointer' }}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {menuOpen && isMobile && (
                <div className="fixed inset-0 top-20 z-50 bg-white p-6 flex flex-col gap-4" style={{ borderBottom: `${border.width} ${border.style} ${border.color}` }}>
                    {['Architecture', 'Furniture', 'Theory', 'Shop'].map((item, i) => (
                        <a key={item} className="flex items-center py-4 font-bold uppercase tracking-wide" style={{ borderBottom: `${border.width} ${border.style} ${border.color}`, backgroundColor: [colors.red, colors.blue, colors.yellow, 'white'][i], padding: '16px', color: i < 2 ? 'white' : 'black' }}>
                            {item}
                        </a>
                    ))}
                </div>
            )}

            {/* ========== 2. HERO SECTION ========== */}
            <section style={{ borderBottom: `${border.width} ${border.style} ${border.color}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid" style={{ gridTemplateColumns: isMobile ? '1fr' : '8fr 4fr', minHeight: '600px' }}>
                        <div className="flex flex-col justify-between" style={{ padding: spacing.xl, borderRight: !isMobile ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                            <div>
                                <div style={{ display: 'inline-block', backgroundColor: colors.blue, color: colors.bg, padding: '8px 16px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: spacing.lg }}>
                                    New Collection 2025
                                </div>
                                <h1 style={{ fontSize: isMobile ? '48px' : '80px', fontWeight: '800', lineHeight: 1, textTransform: 'uppercase', marginBottom: spacing.lg }}>
                                    Universal<br />Harmony.
                                </h1>
                                <p style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '500px', fontWeight: '500' }}>
                                    Reducing design to its purest elements. We build digital and physical spaces using fundamental geometric principles.
                                </p>
                            </div>
                            <div className="mt-12 bg-white" style={{ border: `${border.width} ${border.style} ${border.color}`, display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                                <button style={{ padding: '20px 40px', borderRight: !isMobile ? `${border.width} ${border.style} ${border.color}` : 'none', borderBottom: isMobile ? `${border.width} ${border.style} ${border.color}` : 'none', background: colors.red, color: 'white', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>
                                    View Projects
                                </button>
                                <button style={{ padding: '20px 40px', background: 'transparent', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>
                                    Contact
                                </button>
                            </div>
                        </div>

                        {/* Abstract Composition Visual */}
                        {!isMobile && (
                            <div className="relative" style={{ borderTop: isMobile ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                                <div className="absolute inset-0 grid grid-cols-2 grid-rows-3">
                                    <div style={{ background: colors.yellow, borderBottom: `${border.width} ${border.style} ${border.color}`, borderRight: `${border.width} ${border.style} ${border.color}` }} />
                                    <div style={{ background: 'white', borderBottom: `${border.width} ${border.style} ${border.color}` }} />
                                    <div style={{ background: 'white', borderBottom: `${border.width} ${border.style} ${border.color}`, borderRight: `${border.width} ${border.style} ${border.color}` }} />
                                    <div style={{ background: colors.red, borderBottom: `${border.width} ${border.style} ${border.color}` }} />
                                    <div style={{ background: colors.blue, borderRight: `${border.width} ${border.style} ${border.color}` }} />
                                    <div style={{ background: 'white' }} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ========== 9. TRUST STRIP ========== */}
            <section style={{ borderBottom: `${border.width} ${border.style} ${border.color}` }}>
                <div className="max-w-6xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)' }}>
                    {['MOMA', 'TATE', 'GUGGENHEIM', 'BAUHAUS', 'RISD'].slice(0, isMobile ? 4 : 5).map((logo, i, arr) => (
                        <div key={logo} className="py-8 flex items-center justify-center" style={{ borderRight: i === arr.length - 1 ? 'none' : `${border.width} ${border.style} ${border.color}`, borderBottom: isMobile && i < 2 ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                            <span style={{ fontSize: '16px', fontWeight: '800', letterSpacing: '0.1em' }}>{logo}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== 3. PROBLEM / PHILOSOPHY ========== */}
            <section style={{ padding: isMobile ? spacing.lg : 0 }}>
                <div className="max-w-6xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', borderBottom: !isMobile ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                    {[
                        { title: 'The Void', desc: 'Chaos in modern design creates visual noise.', color: colors.bg, text: colors.primary },
                        { title: 'The Line', desc: 'Structure provides meaning and clarity.', color: colors.primary, text: colors.bg },
                        { title: 'The Plane', desc: 'Color defines space and emotion.', color: colors.blue, text: colors.bg }
                    ].map((item, i) => (
                        <div key={i} style={{
                            padding: spacing.xl,
                            backgroundColor: item.color,
                            color: item.text,
                            borderRight: (i < 2 && !isMobile) ? `${border.width} ${border.style} ${border.color}` : 'none',
                            borderBottom: isMobile ? `${border.width} ${border.style} ${border.color}` : 'none'
                        }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', textTransform: 'uppercase', marginBottom: spacing.md }}>0{i + 1}. {item.title}</h3>
                            <p style={{ fontSize: '16px', lineHeight: 1.5, opacity: 0.9 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== 5. SYSTEM OVERVIEW ========== */}
            <section style={{ padding: `${spacing.section} 0` }}>
                <div className="max-w-6xl mx-auto px-6 mb-12">
                    <h2 style={{ fontSize: isMobile ? '36px' : '56px', fontWeight: '800', textTransform: 'uppercase' }}>The Process</h2>
                </div>
                <div className="max-w-6xl mx-auto" style={{ borderTop: `${border.width} ${border.style} ${border.color}`, borderBottom: `${border.width} ${border.style} ${border.color}` }}>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)' }}>
                        {[
                            { icon: PenTool, label: 'Abstraction' },
                            { icon: Grid, label: 'Geometry' },
                            { icon: Palette, label: 'Color' },
                            { icon: Layout, label: 'Synthesis' }
                        ].map((step, i) => (
                            <div key={i} style={{ padding: spacing.xl, textAlign: 'center', borderRight: (i < 3 && !isMobile) ? `${border.width} ${border.style} ${border.color}` : 'none', borderBottom: isMobile ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                                <step.icon size={32} style={{ marginBottom: spacing.md, color: (i % 2 === 0) ? colors.red : colors.blue }} />
                                <h4 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase' }}>{step.label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 6. BENTO GRID ========== */}
            <section style={{ paddingBottom: spacing.section }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gridTemplateRows: isMobile ? 'auto' : 'repeat(2, 1fr)', gap: 0, border: `${border.width} ${border.style} ${border.color}` }}>
                        {/* Large Box */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: isMobile ? 'auto' : 'span 2', padding: '2rem', borderRight: !isMobile ? `${border.width} ${border.style} ${border.color}` : 'none', borderBottom: isMobile ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                            <h3 style={{ fontSize: '32px', fontWeight: '800', textTransform: 'uppercase', marginBottom: spacing.md }}>Residential<br />Architecture</h3>
                            <p style={{ fontSize: '18px', marginBottom: spacing.xl }}>Creating living spaces that function as total works of art (Gesamtkunstwerk).</p>
                            <div style={{ width: '100%', height: '200px', backgroundColor: colors.gray, border: `${border.width} ${border.style} ${border.color}` }} />
                        </div>
                        {/* Box 2 */}
                        <div style={{ padding: '2rem', backgroundColor: colors.yellow, borderRight: !isMobile ? `${border.width} ${border.style} ${border.color}` : 'none', borderBottom: `${border.width} ${border.style} ${border.color}` }}>
                            <h4 style={{ fontWeight: '800', textTransform: 'uppercase' }}>Interior</h4>
                        </div>
                        {/* Box 3 */}
                        <div style={{ padding: '2rem', borderBottom: `${border.width} ${border.style} ${border.color}` }}>
                            <h4 style={{ fontWeight: '800', textTransform: 'uppercase' }}>Landscape</h4>
                        </div>
                        {/* Box 4 */}
                        <div style={{ padding: '2rem', backgroundColor: colors.red, borderRight: !isMobile ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                            <h4 style={{ fontWeight: '800', textTransform: 'uppercase', color: 'white' }}>Furniture</h4>
                        </div>
                        {/* Box 5 */}
                        <div style={{ padding: '2rem', backgroundColor: colors.blue }}>
                            <h4 style={{ fontWeight: '800', textTransform: 'uppercase', color: 'white' }}>Urban</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 11. USE CASES ========== */}
            <section style={{ padding: `${spacing.section} 0`, backgroundColor: colors.gray }}>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 style={{ fontSize: '32px', fontWeight: '800', textTransform: 'uppercase', marginBottom: spacing.xl }}>For Every Space</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 0, border: `${border.width} ${border.style} ${border.color}`, backgroundColor: 'white' }}>
                        {[
                            { title: 'Private', items: ['Residences', 'Vacation Homes', 'Studios'] },
                            { title: 'Public', items: ['Museums', 'Galleries', 'Libraries'] },
                            { title: 'Commercial', items: ['Offices', 'Retail', 'Showrooms'] }
                        ].map((cat, i) => (
                            <div key={i} style={{ padding: spacing.xl, borderRight: (i < 2 && !isMobile) ? `${border.width} ${border.style} ${border.color}` : 'none', borderBottom: isMobile ? `${border.width} ${border.style} ${border.color}` : 'none' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', textTransform: 'uppercase', marginBottom: spacing.lg, color: [colors.red, colors.blue, colors.yellow][i] }}>{cat.title}</h3>
                                <ul className="space-y-4">
                                    {cat.items.map(item => (
                                        <li key={item} className="flex items-center gap-2 font-bold">
                                            <div style={{ width: '6px', height: '6px', backgroundColor: 'black' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 12. PRICING ========== */}
            <section style={{ padding: `${spacing.section} 0` }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row'} justify-between items-end mb-12`}>
                        <h2 style={{ fontSize: '48px', fontWeight: '800', textTransform: 'uppercase' }}>Consultation</h2>
                        <div className="flex" style={{ border: `${border.width} ${border.style} ${border.color}` }}>
                            <button onClick={() => setBillingCycle('monthly')} style={{ padding: '12px 24px', backgroundColor: billingCycle === 'monthly' ? 'black' : 'white', color: billingCycle === 'monthly' ? 'white' : 'black', fontWeight: '700', textTransform: 'uppercase' }}>Project</button>
                            <button onClick={() => setBillingCycle('annual')} style={{ padding: '12px 24px', backgroundColor: billingCycle === 'annual' ? 'black' : 'white', color: billingCycle === 'annual' ? 'white' : 'black', fontWeight: '700', textTransform: 'uppercase' }}>Retainer</button>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', border: `${border.width} ${border.style} ${border.color}` }}>
                        {[
                            { name: 'Concept', price: '5k' },
                            { name: 'Design', price: '12k', highlight: true },
                            { name: 'Build', price: '25k' }
                        ].map((plan, i) => (
                            <div key={i} style={{
                                padding: spacing.xl,
                                borderRight: (i < 2 && !isMobile) ? `${border.width} ${border.style} ${border.color}` : 'none',
                                borderBottom: isMobile ? `${border.width} ${border.style} ${border.color}` : 'none',
                                backgroundColor: plan.highlight ? colors.yellow : 'white'
                            }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '800', textTransform: 'uppercase', marginBottom: spacing.md }}>{plan.name}</h3>
                                <div style={{ fontSize: '64px', fontWeight: '800', marginBottom: spacing.lg }}>${plan.price}</div>
                                <p style={{ fontSize: '14px', marginBottom: spacing.xl, lineHeight: 1.5 }}>
                                    Comprehensive analysis including spatial composition and color theory application.
                                </p>
                                <button style={{ width: '100%', padding: '16px', border: `${border.width} ${border.style} ${border.color}`, backgroundColor: 'white', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', boxShadow: '4px 4px 0px black' }}>
                                    Select
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 14. FOOTER ========== */}
            <footer style={{ backgroundColor: colors.primary, color: colors.bg, padding: `${spacing.section} 0` }}>
                <div className="max-w-6xl mx-auto px-6" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '3rem' }}>
                    <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '800', textTransform: 'uppercase', marginBottom: spacing.md }}>De Stijl Studio</h2>
                        <p style={{ maxWidth: '300px', opacity: 0.7 }}>Utrecht, Netherlands 1917.<br />Pure abstraction and universality in design.</p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: '700', textTransform: 'uppercase', marginBottom: spacing.lg, color: colors.yellow }}>Menu</h4>
                        <ul className="space-y-4 text-sm font-bold opacity-80">
                            <li>Work</li>
                            <li>Philosophy</li>
                            <li>Journal</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: '700', textTransform: 'uppercase', marginBottom: spacing.lg, color: colors.red }}>Social</h4>
                        <ul className="space-y-4 text-sm font-bold opacity-80">
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className={`max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-gray-800 flex ${isMobile ? 'flex-col gap-4' : 'flex-row'} justify-between text-xs font-bold text-gray-400 uppercase tracking-widest`}>
                    <div>© 2025 Studio Mondrian</div>
                    <div>Privacy Policy</div>
                </div>
            </footer>
        </div>
    );
};
