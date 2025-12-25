import { useState } from 'react';
import { Menu, X, ArrowRight, Star, ShoppingBag, Globe, Feather, Diamond, Crown, Watch } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S10LuxuryEditorialPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S10 Luxury Design Tokens
    const colors = { bg: '#FAFAF9', text: '#1C1917', gold: '#D4AF37', serif: '"Playfair Display", serif', sans: '"Inter", sans-serif' };

    return (
        <div className="min-h-screen text-stone-900 selection:bg-stone-900 selection:text-white" style={{ backgroundColor: colors.bg, fontFamily: colors.sans }}>
            {/* ========== NAV ========== */}
            <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                    <div className="text-3xl font-serif italic font-bold">
                        Vogue<span className="text-[#D4AF37]">X</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-medium">
                            {['Collections', 'Maison', 'Atelier', 'Journal'].map(item => (
                                <a key={item} className="hover:text-[#D4AF37] transition-colors cursor-pointer relative group">
                                    {item}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full" />
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-8">
                        {!isMobile && <button className="text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors">Account</button>}
                        <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                            Cart (0)
                        </button>
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-[#D4AF37] transition-colors">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="fixed inset-0 top-24 bg-[#FAFAF9] z-40 p-8 flex flex-col gap-8">
                        {['Collections', 'Maison', 'Atelier', 'Journal'].map((item, i) => (
                            <a key={item} className="text-3xl font-serif italic text-stone-900 border-b border-stone-200 pb-4 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                                {item}
                            </a>
                        ))}
                        <button className="text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors text-left pt-4">Account</button>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: '3rem', alignItems: 'center' }}>
                    <div style={{ gridColumn: isMobile ? 'span 1' : 'span 5', order: isMobile ? 2 : 1 }}>
                        <div className="text-[#D4AF37] font-serif italic text-xl mb-6">Est. Paris, 1924</div>
                        <h1 style={{ fontSize: isMobile ? '3rem' : '6rem' }} className="font-serif leading-[0.9] mb-10">
                            Timeless<br />
                            <span className="italic font-light">Elegance</span><br />
                            Redefined.
                        </h1>
                        <p className="text-lg text-stone-500 font-light leading-relaxed mb-12 max-w-sm border-l border-[#D4AF37] pl-6">
                            Crafting the future of digital luxury. Where heritage meets innovation in a seamless tapestry of design.
                        </p>
                        <button className="bg-[#1C1917] text-white px-12 py-5 text-sm uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-colors">
                            Explore Collection
                        </button>
                    </div>

                    <div style={{ gridColumn: isMobile ? 'span 1' : 'span 7', order: isMobile ? 1 : 2 }} className="relative">
                        {/* High-End Visual Composition */}
                        <div className="relative" style={{ aspectRatio: isMobile ? '3/4' : '4/3' }}>
                            <div className="absolute inset-0 bg-stone-200">
                                {/* Abstract Fashion Image Placeholder */}
                                <div className="w-full h-full bg-[#1C1917] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-2/3 h-full bg-stone-300 opacity-20 transform -skew-x-12 translate-x-1/4" />
                                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-[100px] opacity-10" />

                                    {/* Centerpiece */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-64 h-80 border border-white/20 backdrop-blur-sm flex items-center justify-center relative">
                                            <div className="absolute top-4 left-4 text-white/50 text-xs tracking-widest">FIG. 01</div>
                                            <Diamond size={64} className="text-white/80 font-light" strokeWidth={0.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Stamp" */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                                <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                                    <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                                    <text fontSize="11" letterSpacing="2">
                                        <textPath href="#curve">
                                            LUXURY • DIGITAL • MAISON • PARIS •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TICKER ========== */}
            <section className="border-y border-stone-200 py-6 overflow-hidden">
                <div className={`flex ${isMobile ? 'flex-wrap gap-4' : 'justify-between'} max-w-7xl mx-auto px-6 font-serif italic text-2xl text-stone-400`}>
                    <span>Vogue</span>
                    <span>Harper's Bazaar</span>
                    {!isMobile && <span>Elle Decor</span>}
                    {!isMobile && <span>Architectural Digest</span>}
                </div>
            </section>

            {/* ========== PHILOSOPHY ========== */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-px h-20 bg-[#D4AF37] mx-auto mb-10" />
                    <h2 style={{ fontSize: isMobile ? '1.875rem' : '3rem' }} className="font-serif mb-12 leading-tight">
                        "True luxury gives you time. The ultimate scarcity in a digital world."
                    </h2>
                    <p className="text-sm uppercase tracking-[0.2em] text-stone-400">The Philosophy</p>
                </div>
            </section>

            {/* ========== BENTO (COLLECTIONS) ========== */}
            <section className="py-20 px-6 bg-stone-100">
                <div className="max-w-7xl mx-auto">
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1px' }}>
                        {/* Large Item */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="relative aspect-square bg-white p-12 flex flex-col justify-between group hover:bg-[#1C1917] hover:text-white transition-colors duration-700">
                            <div className="flex justify-between items-start">
                                <span className="text-xs tracking-widest uppercase border border-current px-2 py-1">New Arrival</span>
                                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                            <div>
                                <h3 className="text-6xl font-serif italic mb-6">Le Sac</h3>
                                <p className="max-w-sm text-lg font-light opacity-70">Hand-stitched digital leather. A paradox of material and pixel.</p>
                            </div>
                            <div className="absolute right-12 bottom-12 w-32 h-32 rounded-full border border-current opacity-20" />
                        </div>

                        {/* Tall Item */}
                        <div className="bg-[#D4AF37] p-12 flex flex-col justify-center text-center text-white">
                            <Crown size={48} className="mx-auto mb-8 opacity-80" strokeWidth={1} />
                            <h3 className="text-3xl font-serif mb-4">Membership</h3>
                            <p className="text-sm tracking-widest uppercase opacity-80 mb-8">Exclusive Access</p>
                            <button className="border border-white/30 py-3 uppercase text-xs tracking-[0.25em] hover:bg-white hover:text-stone-900 transition-colors">Apply</button>
                        </div>

                        {/* Wide Item */}
                        <div className="bg-stone-200 p-12 flex items-center justify-between group cursor-pointer overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="text-xs uppercase tracking-widest mb-2 text-stone-500">Horology</div>
                                <h3 className="text-4xl font-serif">Chronos</h3>
                            </div>
                            <Watch size={64} className="text-stone-300 group-hover:scale-110 transition-transform duration-700" strokeWidth={0.5} />
                        </div>

                        {/* Standard Item */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="bg-white p-12 flex items-center gap-12">
                            <div className="flex-1">
                                <h3 className="text-4xl font-serif mb-6">Concierge</h3>
                                <p className="text-stone-500 font-light leading-relaxed mb-8">
                                    Our dedicated team is available 24/7 to assist with your digital acquisitions and style consultations.
                                </p>
                                <a className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer">Contact Us</a>
                            </div>
                            {!isMobile && (
                                <div className="w-32 h-32 bg-stone-100 rounded-full flex items-center justify-center">
                                    <Feather size={32} className="text-stone-400" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== MEMBERSHIP ========== */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '5rem' }}>
                    <div className="border border-stone-200 p-12 text-center" style={{ padding: isMobile ? '3rem' : '5rem' }}>
                        <h3 className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-8">Atelier</h3>
                        <div className="text-5xl font-serif mb-4">Silver</div>
                        <div className="text-xl text-stone-400 font-serif italic mb-12">Complimentary</div>
                        <ul className="space-y-4 mb-12 text-sm uppercase tracking-widest text-stone-500">
                            <li>Seasonal Lookbook</li>
                            <li>Standard Shipping</li>
                            <li>Newsletter</li>
                        </ul>
                        <button className="w-full border border-stone-900 py-4 text-xs uppercase tracking-[0.25em] hover:bg-stone-900 hover:text-white transition-colors">Join</button>
                    </div>

                    <div className="bg-[#1C1917] text-white p-12 text-center relative overflow-hidden" style={{ padding: isMobile ? '3rem' : '5rem' }}>
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />
                        <h3 className="text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-8">Maison ✨</h3>
                        <div className="text-5xl font-serif mb-4">Gold</div>
                        <div className="text-xl text-stone-400 font-serif italic mb-12">$5,000 / Year</div>
                        <ul className="space-y-4 mb-12 text-sm uppercase tracking-widest text-stone-300">
                            <li>Private Viewings</li>
                            <li>Concierge Service</li>
                            <li>Custom Calibration</li>
                            <li>Made-to-Order</li>
                        </ul>
                        <button className="w-full bg-[#D4AF37] text-stone-900 py-4 text-xs uppercase tracking-[0.25em] hover:bg-white transition-colors">Apply for Membership</button>
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer className="bg-[#1C1917] text-white pt-24 pb-12 px-6 border-t-[10px] border-[#D4AF37]">
                <div className="max-w-7xl mx-auto mb-24" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '4rem' }}>
                    <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }}>
                        <div className="text-4xl font-serif italic mb-8">Vogue<span className="text-[#D4AF37]">X</span></div>
                        <p className="text-stone-400 font-light max-w-sm leading-relaxed">
                            A fusion of high fashion and digital craftsmanship. We create experiences that transcend the screen.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-8">Maison</h4>
                        <ul className="space-y-4 text-sm tracking-widest font-light text-stone-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Heritage</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Craftsmanship</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Sustainability</li>
                        </ul>
                    </div>
                </div>
                <div className={`max-w-7xl mx-auto flex ${isMobile ? 'flex-col gap-4' : 'flex-row'} justify-between items-center text-xs uppercase tracking-widest text-stone-500 border-t border-white/10 pt-12`}>
                    <div>© 2025 VogueX Paris. All Rights Reserved.</div>
                    <div className="flex gap-8">
                        <span>Legal</span>
                        <span>Privacy</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
