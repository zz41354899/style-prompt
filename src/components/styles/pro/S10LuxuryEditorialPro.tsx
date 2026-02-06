import { useState } from 'react';
import { Menu, X, ArrowRight, Star, ShoppingBag, Globe, Feather, Diamond, Crown, Watch } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';
import { SafeImage } from '@/components/common/SafeImage';

export const S10LuxuryEditorialPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isCompact = responsive.nav.showMobile;

    // S10 Luxury Design Tokens
    const colors = {
        bg: '#FAFAF9',      // Stone 50
        text: '#0C0A09',    // Stone 950
        gold: '#C6A87C',    // Muted Gold (Metallics)
        goldLight: '#E8DCC5',
        stone: '#78716C',   // Stone 500
        offWhite: '#F5F5F4' // Stone 100
    };

    return (
        <div className="min-h-screen text-stone-900 selection:bg-stone-900 selection:text-white relative bg-[#FAFAF9]" style={{ fontFamily: '"Inter", sans-serif' }}>
            {/* ========== NAV ========== */}
            <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                    <div className="text-3xl font-serif italic font-bold">
                        Vogue<span className="text-[#D4AF37]">X</span>
                    </div>

                    {!isCompact && (
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
                        {!isCompact && <button className="text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors">Account</button>}
                        <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                            Cart (0)
                        </button>
                        {isCompact && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-[#D4AF37] transition-colors">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu - 在 header 內部 */}
                {menuOpen && isCompact && (
                    <div className="bg-white border-t border-stone-200">
                        <div className="p-6 flex flex-col gap-4">
                            {['Collections', 'Maison', 'Atelier', 'Journal'].map((item) => (
                                <a key={item} className="text-xl font-serif italic text-stone-900 border-b border-stone-200 pb-4 hover:text-[#D4AF37] transition-colors cursor-pointer">
                                    {item}
                                </a>
                            ))}
                            <button className="text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors text-left pt-2">Account</button>
                        </div>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section className="pt-20 pb-32 px-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        {/* Text Content */}
                        <div className="md:col-span-5 relative z-10">
                            <div className="inline-block border-b border-[#C6A87C] pb-2 mb-8">
                                <span className="text-[#C6A87C] font-serif italic text-xl tracking-wide">Est. Paris, 1924</span>
                            </div>

                            <h1 className={`${isCompact ? 'text-6xl' : 'text-8xl'} font-serif leading-[0.9] mb-12 text-[#0C0A09]`}>
                                Timeless<br />
                                <span className="italic font-light text-[#C6A87C]">Elegance</span><br />
                                Redefined.
                            </h1>

                            <div className="flex flex-col gap-8 max-w-sm">
                                <p className="text-lg text-[#78716C] font-light leading-relaxed border-l-2 border-[#C6A87C] pl-6">
                                    Crafting the future of digital luxury. Where heritage meets innovation in a seamless tapestry of design.
                                </p>
                                <div className="flex items-center gap-8">
                                    <button className="bg-[#0C0A09] text-white px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-[#C6A87C] transition-all duration-500">
                                        Explore
                                    </button>
                                    <button className="text-[#0C0A09] text-xs uppercase tracking-[0.25em] relative group hover:text-[#C6A87C] transition-colors">
                                        View Film
                                        <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#C6A87C] transition-all duration-500 group-hover:w-full" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Visual Composition */}
                        <div className="md:col-span-7 relative">
                            <div className="relative aspect-[3/4] md:aspect-[4/5] bg-[#F5F5F4]">
                                {/* Main Image */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <SafeImage
                                        src="https://images.unsplash.com/photo-1549488497-63a232f3ddde?q=80&w=2670&auto=format&fit=crop"
                                        alt="Luxury Fashion"
                                        className="w-full h-full object-cover grayscale contrast-[.9] brightness-[1.1]"
                                        fallbackColor="#F5F5F4"
                                    />
                                    <div className="absolute inset-0 bg-[#C6A87C] mix-blend-multiply opacity-20" />
                                </div>

                                {/* Overlay UI Elements */}
                                <div className="absolute top-8 right-8 mix-blend-difference text-white">
                                    <span className="block text-xs uppercase tracking-[0.3em] text-right mb-2">Collection</span>
                                    <span className="block text-4xl font-serif italic text-right">No. 04</span>
                                </div>

                                {/* Floating Card */}
                                <div className="absolute -bottom-16 -left-16 w-64 bg-white p-8 shadow-2xl hidden md:block">
                                    <div className="flex justify-between items-start mb-6">
                                        <Diamond size={24} className="text-[#C6A87C]" strokeWidth={1} />
                                        <span className="text-[10px] uppercase tracking-widest text-[#78716C]">Fig. A</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mb-2">Le Blouse</h3>
                                    <p className="text-xs text-[#78716C] mb-4">Silk Chiffon, Ivory</p>
                                    <div className="text-lg font-serif italic">$1,290</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TICKER ========== */}
            <section className="border-y border-stone-200 py-6 overflow-hidden">
                <div className={`flex ${isCompact ? 'flex-wrap gap-4' : 'justify-between'} max-w-7xl mx-auto px-6 font-serif italic text-2xl text-stone-400`}>
                    <span>Vogue</span>
                    <span>Harper's Bazaar</span>
                    {!isCompact && <span>Elle Decor</span>}
                    {!isCompact && <span>Architectural Digest</span>}
                </div>
            </section>

            {/* ========== PHILOSOPHY ========== */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center relative">
                    <span className="text-[10rem] text-[#E8DCC5] font-serif absolute -top-20 left-1/2 -translate-x-1/2 opacity-30 select-none">"</span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight relative z-10 text-[#0C0A09]">
                        True luxury is <span className="italic text-[#C6A87C]">time</span>. <br />The ultimate scarcity in a digital world.
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-[#C6A87C]" />
                        <p className="text-xs uppercase tracking-[0.3em] text-[#78716C]">The Philosophy</p>
                        <div className="h-px w-12 bg-[#C6A87C]" />
                    </div>
                </div>
            </section>

            {/* ========== BENTO (COLLECTIONS) ========== */}
            <section className="py-24 px-6 bg-[#F5F5F4]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Large Item: Editorial Feature */}
                        <div className="md:col-span-2 relative aspect-[16/9] md:aspect-auto bg-white group overflow-hidden">
                            <SafeImage
                                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
                                alt="Collection"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                fallbackColor="#FAFAF9"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <span className="text-xs uppercase tracking-[0.3em] mb-4 block opacity-80">New Arrival</span>
                                <h3 className="text-5xl font-serif italic">Le Sac</h3>
                            </div>
                            <div className="absolute top-8 right-8 w-12 h-12 border border-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-45 group-hover:rotate-0">
                                <ArrowRight size={16} className="text-white" />
                            </div>
                        </div>

                        {/* Tall Item: Membership */}
                        <div className="bg-[#0C0A09] text-[#FAFAF9] p-12 flex flex-col justify-between text-center border border-[#1C1917] hover:border-[#C6A87C] transition-colors group">
                            <div className="mx-auto w-16 h-16 border border-[#333] rounded-full flex items-center justify-center mb-8 group-hover:border-[#C6A87C] transition-colors">
                                <Crown size={24} className="text-[#C6A87C]" strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif italic mb-2">Private Client</h3>
                                <p className="text-xs tracking-widest uppercase text-[#78716C] mb-8">By Invitation Only</p>
                                <div className="space-y-4 text-sm font-light text-[#A8A29E]">
                                    <p>Annual Gala</p>
                                    <p>Personal Shopper</p>
                                    <p>First Access</p>
                                </div>
                            </div>
                            <button className="mt-8 text-xs uppercase tracking-[0.25em] border-b border-[#333] pb-2 hover:text-[#C6A87C] hover:border-[#C6A87C] transition-colors">
                                Inquire
                            </button>
                        </div>

                        {/* Wide Item: Horology */}
                        <div className="md:col-span-3 bg-white p-12 flex flex-col md:flex-row items-center justify-between border-t border-[#E7E5E4] hover:bg-[#FAF9F6] transition-colors group md:h-64">
                            <div className="flex-1">
                                <span className="text-xs uppercase tracking-[0.3em] text-[#C6A87C] mb-4 block">Horology</span>
                                <h3 className="text-4xl md:text-5xl font-serif mb-4 text-[#0C0A09]">The Chronos <span className="italic font-light text-[#78716C]">Edit</span></h3>
                                <p className="text-[#78716C] font-light max-w-md">Swiss engineering meets digital precision. A collection defined by seconds, remembered for decades.</p>
                            </div>
                            <div className="mt-8 md:mt-0 relative w-48 h-48 flex items-center justify-center">
                                <div className="absolute inset-0 border border-[#E7E5E4] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                                <Watch size={64} className="text-[#0C0A09] relative z-10" strokeWidth={0.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== MEMBERSHIP ========== */}
            <section className="py-32 px-6 border-b border-[#E7E5E4]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <div className="text-center md:text-left">
                            <span className="text-[#C6A87C] font-serif italic text-2xl mb-6 block">L'Atelier</span>
                            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#0C0A09]">
                                Curated <br />Excellence.
                            </h2>
                            <p className="text-[#78716C] font-light leading-relaxed mb-12 max-w-md">
                                Access the unaccessible. Our members receive priority access to limited digital drops, private viewings, and bespoke commissions.
                            </p>
                            <div className="flex flex-col gap-4 border-l border-[#E7E5E4] pl-6 text-sm tracking-widest uppercase text-[#78716C] mb-12">
                                <span>Private Concierge</span>
                                <span>Global Access</span>
                                <span>Bespoke Digital Assets</span>
                            </div>
                            <button className="bg-[#0C0A09] text-white px-12 py-5 text-xs uppercase tracking-[0.25em] hover:bg-[#C6A87C] transition-colors">
                                Apply for Membership
                            </button>
                        </div>

                        <div className="relative aspect-[3/4] bg-[#F5F5F4] p-8 md:p-12 flex flex-col justify-between overflow-hidden group">
                            <SafeImage
                                src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1000&auto=format&fit=crop"
                                alt="Membership"
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
                                fallbackColor="#0C0A09"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                            <div className="relative z-10 flex justify-between items-start text-white/80">
                                <Diamond size={24} />
                                <span className="text-xs tracking-widest uppercase">Maison Card</span>
                            </div>

                            <div className="relative z-10 text-white">
                                <div className="text-2xl font-serif italic mb-2">Gold Member</div>
                                <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">0000 1234 5678 9000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer className="bg-[#0C0A09] text-white/60 py-24 px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div>
                        <div className="text-white text-3xl font-serif italic mb-8">Vogue<span className="text-[#C6A87C]">X</span></div>
                        <div className="flex gap-8 text-xs uppercase tracking-[0.25em]">
                            <a href="#" className="hover:text-[#C6A87C] transition-colors">Legal</a>
                            <a href="#" className="hover:text-[#C6A87C] transition-colors">Privacy</a>
                            <a href="#" className="hover:text-[#C6A87C] transition-colors">Contact</a>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs uppercase tracking-[0.25em] mb-4">Paris • New York • Tokyo</p>
                        <p className="font-serif italic text-2xl text-[#C6A87C]">© 2025 Maison Digital</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
