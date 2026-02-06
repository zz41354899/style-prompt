import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Diamond, Crown, Sparkles, Star, Gem, ShieldCheck } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S22DarkModeElegancePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: { primary: '#050505', secondary: '#0A0A0A', surface: '#121212' },
        text: { primary: '#F5F5F0', secondary: '#A1A1AA', muted: '#52525B' },
        brand: { primary: '#D4AF37', secondary: '#C5A028', accent: '#E5E7EB' }, // Metallic Gold
        border: '#27272A',
    };

    const gradients = {
        primary: 'linear-gradient(135deg, #D4AF37 0%, #AA8929 100%)',
        glow: '0 0 40px rgba(212, 175, 55, 0.25)',
        card: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        goldText: 'linear-gradient(to right, #FBF5E3, #D4AF37, #AA8929, #D4AF37, #FBF5E3)',
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg.primary, color: colors.text.primary, fontFamily: '"Playfair Display", "Inter", serif' }}>

            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(5,5,5,0.85)' }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center relative transition-all duration-700"
                            style={{ background: 'rgba(212, 175, 55, 0.1)', border: `1px solid ${colors.brand.primary}` }}>
                            <Crown size={20} color={colors.brand.primary} />
                        </div>
                        <span className="text-2xl font-serif italic tracking-wide" style={{ color: colors.text.primary }}>Luxe<span style={{ color: colors.brand.primary }}>.Noir</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Heritage', 'Collection', 'Privilege', 'Atelier'].map((item) => (
                                <span key={item} className="text-xs font-bold tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 hover:text-[#D4AF37]" style={{ color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-8">
                        {!isMobile && (
                            <button className="group px-8 py-3 rounded-sm font-bold text-xs tracking-[0.2em] uppercase text-[#050505] transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] relative overflow-hidden"
                                style={{ background: gradients.primary }}>
                                <span className="relative z-10">Access Vault</span>
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2 text-[#D4AF37]">
                                {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-full left-0 w-full h-screen bg-[#050505] p-10 animate-in fade-in zoom-in-95 duration-500 z-50">
                        {['HERITAGE', 'COLLECTION', 'PRIVILEGE', 'ATELIER'].map((item) => (
                            <div key={item} className="py-8 text-3xl font-serif italic border-b border-white/10 text-[#D4AF37]">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: '160px 40px 120px', position: 'relative' }}>
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-12 inline-flex items-center gap-4 px-8 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-md">
                        <Sparkles size={14} className="text-[#D4AF37]" />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#D4AF37]">
                            Excellence_Redefined
                        </span>
                    </div>

                    <h1 className="mb-12 font-serif leading-[1.1] max-w-5xl"
                        style={{ fontSize: isMobile ? '48px' : '96px', color: colors.text.primary }}>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#52525B]">The Art of</span>
                        <span className="block italic text-transparent bg-clip-text" style={{ backgroundImage: gradients.primary, paddingBottom: '20px' }}>Dark Elegance</span>
                    </h1>

                    <p className="max-w-2xl font-light leading-loose mb-16 opacity-80"
                        style={{ fontSize: '18px', color: colors.text.secondary }}>
                        Experience the epitome of digital luxury. A refined interface crafted with deep blacks, metallic golds, and absolute precision.
                    </p>

                    <div className="flex gap-8 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="group relative px-12 py-5 border border-[#D4AF37] text-[#D4AF37] font-bold text-xs tracking-[0.25em] uppercase transition-all duration-700 hover:bg-[#D4AF37] hover:text-black">
                            <span className="relative z-10 flex items-center gap-4">
                                Discover More
                                <ArrowRight size={14} />
                            </span>
                        </button>
                    </div>

                    {/* Decorative Elements */}
                    <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-30" />

                    <div className="grid grid-cols-3 gap-24 mt-12 text-center w-full max-w-3xl">
                        {[
                            { label: 'Craftsmanship', value: '100%' },
                            { label: 'Exclusivity', value: 'Limited' },
                            { label: 'Prestige', value: 'Global' }
                        ].map(stat => (
                            <div key={stat.label}>
                                <div className="font-serif italic text-3xl mb-2 text-[#D4AF37]">{stat.value}</div>
                                <div className="text-[10px] uppercase tracking-widest opacity-40">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-6">Mastery & Detail</h2>
                        <div className="text-4xl md:text-5xl font-serif italic text-white flex flex-col items-center gap-4">
                            <span>Curated for the</span>
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: gradients.primary }}>Exceptional Few</span>
                        </div>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Diamond, title: 'Rare Materials', desc: 'Interfaces carved from digital obsidian and polished gold.', color: colors.brand.primary },
                            { icon: Crown, title: 'Royal Hierarchy', desc: 'Typography and layout that commands respect and attention.', color: colors.brand.secondary },
                            { icon: ShieldCheck, title: 'Private Vault', desc: 'Security protocols worthy of the most exclusive collections.', color: colors.brand.accent },
                        ].map((item) => (
                            <div key={item.title} className="group relative p-12 border border-[#333] hover:border-[#D4AF37]/50 transition-all duration-700 bg-[#0A0A0A]">
                                <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                    <item.icon size={32} color={colors.brand.primary} strokeWidth={1} />
                                </div>
                                <h3 className="text-xl font-serif italic mb-4 text-[#F5F5F0]">{item.title}</h3>
                                <p className="font-light leading-relaxed text-[#A1A1AA] text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: '#080808' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.4em] uppercase mb-6">Membership</h2>
                        <div className="text-4xl md:text-5xl font-serif italic text-white">Select Your Legacy</div>
                    </div>

                    <div className="grid gap-px bg-[#1F1F1F] border border-[#1F1F1F]" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Initiate', price: '$2,500', color: colors.brand.primary, feats: ['Access to Archives', 'Digital Concierge', 'Quarterly Reports'], hot: false },
                            { name: 'Sovereign', price: '$5,000', color: colors.brand.secondary, feats: ['Priority Acquisition', 'Private Events', 'Dedicated Curator', 'Global Access'], hot: true },
                            { name: 'Dynasty', price: '$10,000', color: colors.brand.accent, feats: ['Legacy Management', 'Vault Storage', 'Family Office', 'Unlimited Requests'], hot: false },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group p-16 bg-[#050505] hover:bg-[#0A0A0A] transition-colors duration-700">
                                {plan.hot && (
                                    <div className="absolute top-0 right-0 p-4">
                                        <Sparkles size={16} className="text-[#D4AF37]" />
                                    </div>
                                )}
                                <div className="mb-12 text-center">
                                    <div className="font-serif italic text-2xl mb-2 text-[#F5F5F0]">{plan.name}</div>
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Membership</div>
                                </div>
                                <div className="text-center mb-12">
                                    <span className="text-4xl font-light text-[#F5F5F0]">{plan.price}</span>
                                    <span className="text-xs text-[#52525B] block mt-2">per annum</span>
                                </div>
                                <ul className="space-y-6 mb-16 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                    {plan.feats.map((f) => (
                                        <li key={f} className="flex items-center justify-center gap-3 text-sm font-light text-[#A1A1AA]">
                                            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-4 border border-[#333] hover:border-[#D4AF37] text-[#A1A1AA] hover:text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500">
                                    Inquire Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="text-3xl font-serif italic text-white mb-4">Concierge Desk</div>
                        <div className="w-px h-12 bg-[#D4AF37] mx-auto opacity-50" />
                    </div>

                    <div className="space-y-0 border-t border-[#1F1F1F]">
                        {[
                            { q: 'How is membership vetted?', a: 'Admittance is by invitation or referral only. Our committee reviews all applications with strict discretion.' },
                            { q: 'What defines the Noir aesthetic?', a: 'A commitment to shadows, silence, and substance. We strip away the unnecessary to reveal the essential luxury.' },
                            { q: 'Is the vault secure?', a: 'Our digital infrastructure utilizes military-grade encryption and decentralized storage protocols.' },
                        ].map((item, i) => (
                            <div key={i} className="group border-b border-[#1F1F1F]">
                                <button className="w-full flex items-center justify-between py-8 text-left transition-all hover:pl-4"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-serif text-lg text-[#F5F5F0] italic">{item.q}</span>
                                    <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest">Read</span>
                                </button>
                                {expandedFaq === i && (
                                    <div className="pb-8 pr-8 text-[#A1A1AA] font-light leading-loose text-sm">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: '120px 40px 60px', borderTop: '1px solid #1F1F1F' }}>
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                    <Crown size={32} className="text-[#D4AF37]" strokeWidth={1} />

                    <div className="flex gap-16 font-bold text-[10px] tracking-[0.3em] uppercase text-[#52525B]">
                        <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Manifesto</span>
                        <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Legal</span>
                        <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Contact</span>
                    </div>

                    <div className="text-[#333] font-serif italic text-sm">
                        Est. 2025 • Luxe Noir International
                    </div>
                </div>
            </footer>
        </div>
    );
};
