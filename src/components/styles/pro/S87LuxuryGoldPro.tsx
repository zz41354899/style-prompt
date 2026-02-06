import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Crown, Diamond, Star, Award, Gem, Sparkles, Clock, Wine, ShieldCheck } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';
import { SafeImage } from '@/components/common/SafeImage';

export const S87LuxuryGoldPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-[#0C0A08] text-[#F5F0E5] font-sans selection:bg-[#D4AF37] selection:text-[#0C0A08] overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
                
                .font-display { font-family: 'Cinzel', serif; }
                .font-body { font-family: 'Cormorant Garamond', serif; }
                
                .gold-gradient-text {
                    background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .gold-gradient-bg {
                    background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #B38728 100%);
                }
                
                .gold-border {
                    border-image: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728) 1;
                }

                .sparkle {
                    animation: sparkle 2s infinite ease-in-out;
                }

                @keyframes sparkle {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                
                .marble-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
                }
            `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 marble-pattern pointer-events-none z-0"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#0C0A08]/90 backdrop-blur-md border-b border-[#D4AF37]/30 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 border border-[#D4AF37] rounded-full">
                            <Crown size={24} className="text-[#D4AF37]" strokeWidth={1.5} />
                        </div>
                        <span className="text-3xl font-display font-medium gold-gradient-text tracking-widest">LUXURIA</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['TIMEPIECES', 'JEWELRY', 'ATELIER', 'MAISON'].map((item) => (
                                <a key={item} href="#" className="text-sm font-display tracking-[0.2em] text-[#A09080] hover:text-[#D4AF37] transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                            <button className="px-8 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] text-xs font-display tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#0C0A08] transition-all duration-500">
                                INQUIRE
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#D4AF37] hover:text-white transition-colors">
                            {menuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-24 left-0 w-full bg-[#0C0A08] border-b border-[#D4AF37]/30 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-500 z-50">
                        {['TIMEPIECES', 'JEWELRY', 'ATELIER', 'MAISON'].map((item) => (
                            <a key={item} href="#" className="text-xl font-display tracking-widest text-[#F5F0E5] text-center py-2 border-b border-[#D4AF37]/10">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <main className="font-body relative z-10">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <SafeImage 
                                        src="https://images.unsplash.com/photo-1617038224558-28ad3a0d1a12?auto=format&fit=crop&q=80&w=2000" 
                                        alt="Luxury Texture" 
                                        className="w-full h-full object-cover opacity-50"
                                        fallbackColor="#1a1a1a"
                                    />
                    </div>

                    <div className="relative z-20 text-center max-w-4xl mx-auto">
                        <div className="inline-block mb-6 animate-fade-in-up">
                            <span className="text-[#D4AF37] text-sm font-display tracking-[0.4em] uppercase border-b border-[#D4AF37] pb-2">Est. 1924</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-[#F5F0E5] mb-8 leading-none tracking-tight animate-fade-in-up animation-delay-300">
                            TIMELESS <br /> <span className="text-[#D4AF37] italic font-body font-light">Elegance</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-[#A09080] mb-12 max-w-2xl mx-auto italic font-light animate-fade-in-up animation-delay-500">
                            Curating extraordinary moments through magnificent craftsmanship and unparalleled exclusivity.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-700">
                            <button className="px-12 py-4 bg-[#D4AF37] text-[#0C0A08] font-display text-sm tracking-[0.2em] hover:bg-[#FBF5B7] transition-all duration-500 min-w-[200px]">
                                DISCOVER
                            </button>
                            <button className="px-12 py-4 bg-transparent border border-[#F5F0E5]/20 text-[#F5F0E5] font-display text-sm tracking-[0.2em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500 min-w-[200px]">
                                VIEW FILM
                            </button>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50 animate-bounce-slow">
                        <span className="text-[10px] font-display tracking-[0.3em] rotate-90 origin-center translate-y-8">SCROLL</span>
                        <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
                    </div>
                </section>

                {/* Collections Grid */}
                <section className="py-32 px-6 bg-[#0C0A08]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-[#D4AF37] text-xs font-display tracking-[0.3em] uppercase block mb-4">The Collections</span>
                            <h2 className="text-4xl md:text-5xl font-display text-[#F5F0E5] font-medium">Curated Excellence</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "ROYAL", sub: "Signature Series", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800", fallbackColor: "#2a2420" },
                                { title: "NOIR", sub: "Black Diamond", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", fallbackColor: "#1a1a1a" },
                                { title: "ETERNAL", sub: "Wedding Collection", img: "https://images.unsplash.com/photo-1515562141207-7a88fb0537bf?auto=format&fit=crop&q=80&w=800", fallbackColor: "#f5f0e5" }
                            ].map((col, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="relative aspect-[3/4] overflow-hidden mb-8 border border-[#D4AF37]/20">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                                        <SafeImage src={col.img} alt={col.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" fallbackColor={col.fallbackColor} />

                                        <div className="absolute inset-0 border-[1px] border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 m-4 transition-all duration-700 z-20"></div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-display text-[#F5F0E5] mb-2 tracking-widest group-hover:text-[#D4AF37] transition-colors duration-500">{col.title}</h3>
                                        <p className="text-[#A09080] italic font-light tracking-wide">{col.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features / Values */}
                <section className="py-32 px-6 relative border-y border-[#D4AF37]/20">
                    <div className="absolute inset-0 bg-[#0F0D0B]"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid md:grid-cols-3 gap-16 text-center">
                            {[
                                { icon: Gem, title: "Rare Materials", desc: "Sourced from the most exclusive mines worldwide." },
                                { icon: Sparkles, title: "Artisan Crafted", desc: "Hand-finished by master jewelers in our Paris atelier." },
                                { icon: ShieldCheck, title: "Lifetime Warranty", desc: "A promise of enduring quality passed through generations." }
                            ].map((f, i) => (
                                <div key={i} className="group">
                                    <div className="mb-8 inline-flex p-4 border border-[#D4AF37]/30 rotate-45 group-hover:border-[#D4AF37] transition-colors duration-500">
                                        <f.icon size={32} className="text-[#D4AF37] -rotate-45" strokeWidth={1} />
                                    </div>
                                    <h3 className="text-xl font-display text-[#F5F0E5] mb-4 tracking-widest">{f.title}</h3>
                                    <p className="text-[#A09080] font-light italic leading-relaxed max-w-xs mx-auto">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Split Feature Section */}
                <section className="grid lg:grid-cols-2 min-h-[800px]">
                    <div className="relative h-full min-h-[500px]">
                        <SafeImage 
                        src="https://images.unsplash.com/photo-1549488497-6003080a2569?auto=format&fit=crop&q=80&w=1000" 
                        alt="Watchmaking" 
                        className="absolute inset-0 w-full h-full object-cover"
                        fallbackColor="#2a2420"
                    />
                        <div className="absolute inset-0 bg-[#0C0A08]/30"></div>
                    </div>
                    <div className="flex items-center justify-center p-12 lg:p-24 bg-[#0C0A08]">
                        <div className="max-w-md text-center lg:text-left">
                            <h2 className="text-4xl lg:text-5xl font-display text-[#F5F0E5] mb-8 leading-tight">
                                The Master's <br /> <span className="text-[#D4AF37] italic font-body">Touch</span>
                            </h2>
                            <p className="text-[#A09080] text-lg font-light leading-relaxed mb-10 italic">
                                "True luxury lies not in the price, but in the relentless pursuit of perfection. Every piece tells a story of patience, precision, and passion."
                            </p>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
                                    <span className="text-xs font-display tracking-[0.2em] text-[#F5F0E5]">ALEXANDER V., HEAD JEWELER</span>
                                </div>
                                <button className="text-[#D4AF37] text-left font-display tracking-[0.2em] text-xs hover:text-white transition-colors">
                                    READ OUR STORY &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Membership Inquiry */}
                <section className="py-32 px-6 bg-[#0F0D0B] relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto relative z-10 border border-[#D4AF37]/30 p-1 bg-[#0C0A08]/50 backdrop-blur-sm">
                        <div className="border border-[#D4AF37]/30 p-12 md:p-20 text-center">
                            <Crown size={40} className="mx-auto mb-8 text-[#D4AF37]" strokeWidth={1} />

                            <h2 className="text-3xl md:text-5xl font-display text-[#F5F0E5] mb-6">Private Membership</h2>
                            <p className="text-[#A09080] text-lg italic mb-12 max-w-lg mx-auto">
                                Gain access to exclusive collections, private viewings, and our global concierge service.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left bg-[#0C0A08] p-8 border border-[#D4AF37]/10">
                                {[
                                    { level: "GOLD", price: "$5,000", perks: "Seasonal Access" },
                                    { level: "PLATINUM", price: "$15,000", perks: "Priority Access" },
                                    { level: "OBSIDIAN", price: "Invitation", perks: "Full Concierge" }
                                ].map((plan, i) => (
                                    <div key={i} className={`p-4 ${i === 1 ? 'border border-[#D4AF37]/40 bg-[#D4AF37]/5' : ''}`}>
                                        <div className="text-xs text-[#D4AF37] font-display tracking-[0.2em] mb-2">{plan.level}</div>
                                        <div className="text-2xl font-display text-[#F5F0E5] mb-2">{plan.price}</div>
                                        <div className="text-[#A09080] text-sm italic">{plan.perks}</div>
                                    </div>
                                ))}
                            </div>

                            <button className="px-12 py-4 bg-[#D4AF37] text-[#0C0A08] font-display text-sm tracking-[0.2em] hover:bg-[#FBF5B7] transition-all duration-500 w-full md:w-auto">
                                REQUEST INVITATION
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-[#080605] pt-24 pb-12 px-6 border-t border-[#D4AF37]/20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
                        <div className="md:col-span-1">
                            <span className="text-2xl font-display font-medium gold-gradient-text tracking-widest block mb-8">LUXURIA</span>
                            <p className="text-[#665] text-sm italic leading-relaxed font-body font-light">
                                Defining the standard of luxury since 1924. A heritage of gold, a legacy of excellence.
                            </p>
                        </div>

                        {[
                            { head: "BOUTIQUES", links: ["Paris Vendôme", "New York 5th Ave", "Dubai Mall", "Tokyo Ginza"] },
                            { head: "CLIENT CARE", links: ["Contact Concierge", "Shipping & Returns", "Warranty", "Book Appointment"] },
                            { head: "LEGAL", links: ["Privacy Policy", "Terms of Use", "Accessibility", "Sitemap"] }
                        ].map((col, i) => (
                            <div key={i}>
                                <h4 className="text-[#D4AF37] text-xs font-display tracking-[0.2em] mb-6">{col.head}</h4>
                                <ul className="space-y-4">
                                    {col.links.map(link => (
                                        <li key={link}>
                                            <a href="#" className="text-[#888] hover:text-[#D4AF37] font-body italic text-sm transition-colors">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto pt-8 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[#444] text-xs font-display tracking-[0.2em]">© 2025 LUXURIA MAISON. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-4">
                            <Diamond size={16} className="text-[#333]" />
                            <Award size={16} className="text-[#333]" />
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
