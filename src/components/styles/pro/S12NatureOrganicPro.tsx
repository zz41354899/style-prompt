import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Leaf, Sprout, TreeDeciduous, Sun, Wind, Cloud } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S12NatureOrganicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: { primary: '#FDFCF7', secondary: '#F1F5E9', elevated: '#FFFFFF', accent: '#E8EDD8' },
        border: { subtle: '#E0E0E0' }, // Re-added for header border
        text: { primary: '#2D3321', secondary: '#4A5535', muted: '#8A9970', inverse: '#FFFFFF' },
        brand: { primary: '#5B703F', secondary: '#7C945C', accent: '#A4B48A' },
        forest: { deep: '#1B2E1C', light: '#E8F5E9', leaf: '#4CAF50' }
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{
                backgroundColor: colors.bg.primary,
                color: colors.text.primary,
                fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
                letterSpacing: '-0.01em'
            }}>
            {/* Organic Background Blobs */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] opacity-[0.4] mix-blend-multiply blur-[80px] animate-pulse"
                    style={{ backgroundColor: colors.bg.secondary, borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }} />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] opacity-[0.3] mix-blend-multiply blur-[80px]"
                    style={{ backgroundColor: colors.brand.accent, borderRadius: '60% 40% 30% 70% / 50% 60% 50% 40%' }} />
            </div>
            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: `${colors.bg.primary}ee`, borderBottom: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ padding: `${spacing.md} ${spacing.lg}` }}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` }}>
                            <Leaf size={20} color="white" />
                        </div>
                        <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', color: colors.text.primary }}>Evergreen</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                                <span key={item} className="cursor-pointer transition-colors hover:opacity-70" style={{ fontSize: '14px', color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button className="transition-all hover:shadow-lg" style={{ padding: '10px 24px', backgroundColor: colors.brand.primary, color: colors.text.inverse, borderRadius: '24px', fontSize: '14px', fontWeight: 500 }}>
                                Get Started
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: colors.text.secondary }}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div style={{ borderTop: `1px solid ${colors.border.subtle}`, padding: spacing.lg, backgroundColor: colors.bg.elevated }}>
                        <div className="space-y-4">
                            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                                <div key={item} style={{ fontSize: '16px', color: colors.text.secondary, padding: '12px 0' }}>{item}</div>
                            ))}
                            <button className="w-full transition-all hover:shadow-lg mt-4" style={{ padding: '12px 24px', backgroundColor: colors.brand.primary, color: colors.text.inverse, borderRadius: '24px', fontSize: '14px', fontWeight: 500 }}>
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '48px' : '100px' }}>
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 py-2 px-4 rounded-full"
                                style={{ backgroundColor: `${colors.brand.primary}10`, border: `1px solid ${colors.brand.primary}20` }}>
                                <Sprout size={14} color={colors.brand.primary} />
                                <span style={{ fontSize: '13px', color: colors.brand.primary, fontWeight: 600, letterSpacing: '0.05em' }}>ROOTED IN NATURE</span>
                            </div>
                            <h1 style={{ fontSize: isMobile ? '44px' : '72px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '32px' }}>
                                Breathe <span style={{ color: colors.brand.primary }}>Life</span> <br />
                                Into Your Design
                            </h1>
                            <p style={{ fontSize: '18px', lineHeight: 1.8, color: colors.text.secondary, marginBottom: '48px', maxWidth: '480px' }}>
                                A design system inspired by the fluid beauty of the natural world. Harmonious, sustainable, and purely organic.
                            </p>
                            <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="flex items-center justify-center gap-2 group transition-all hover:translate-y-[-2px]"
                                    style={{ padding: '18px 40px', backgroundColor: colors.brand.primary, color: 'white', borderRadius: '18px', fontSize: '16px', fontWeight: 600, boxShadow: `0 12px 24px ${colors.brand.primary}30` }}>
                                    Start Growing
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="transition-all hover:bg-neutral-50"
                                    style={{ padding: '18px 40px', border: `2px solid ${colors.brand.primary}20`, borderRadius: '18px', fontSize: '16px', fontWeight: 600 }}>
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            <div className="relative w-full aspect-square max-w-[500px]">
                                {/* Animated SVG Blob */}
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-10 animate-spin-slow">
                                    <path fill={colors.brand.primary} d="M44.7,-76.4C58.3,-69.2,70,-57.9,77.7,-44.7C85.4,-31.5,89.1,-15.8,88.4,-0.4C87.7,14.9,82.5,30,74.3,43.2C66.1,56.4,54.8,67.7,41.2,74.9C27.6,82,11.8,85,-3.4,90.8C-18.6,96.6,-33.2,105.1,-46.8,103.1C-60.4,101.1,-73.1,88.5,-81.9,73.8C-90.7,59.1,-95.6,42.3,-97,25.6C-98.4,8.9,-96.3,-7.7,-91.3,-23.1C-86.4,-38.5,-78.6,-52.7,-67.2,-61.7C-55.8,-70.7,-40.8,-74.6,-26.1,-80.4C-11.4,-86.2,2.9,-93.9,18.6,-92.4C34.3,-90.9,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[60%] h-[60%] rounded-[40px] rotate-[10deg] flex items-center justify-center transition-transform hover:rotate-[0deg] duration-700"
                                        style={{ backgroundColor: colors.bg.elevated, border: `1px solid ${colors.brand.primary}15`, boxShadow: '0 32px 64px -16px rgba(45,51,33,0.1)' }}>
                                        <div className="text-center p-8">
                                            <div className="w-16 h-16 rounded-[20px] bg-secondary mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: colors.bg.secondary }}>
                                                <Sun size={32} color={colors.brand.primary} className="animate-pulse" />
                                            </div>
                                            <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.4 }}>SOLAR SYSTEM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 600, marginBottom: '16px' }}>Rooted in Principles</h2>
                        <p style={{ fontSize: '16px', color: colors.text.secondary }}>Our core values for a thriving digital ecosystem</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Leaf, title: 'Sustainable Core', desc: 'Built with longevity and ecological balance in mind.', color: '#4CAF50' },
                            { icon: Wind, title: 'Fluid Motion', desc: 'Interfaces that move with the ease of a summer breeze.', color: '#00BCD4' },
                            { icon: Cloud, title: 'Natural Focus', desc: 'Removing the synthetic to reveal the essential beauty.', color: '#90CAF9' },
                        ].map((item) => (
                            <div key={item.title} className="group transition-all duration-500 hover:translate-y-[-8px]"
                                style={{ padding: '48px 32px', backgroundColor: colors.bg.elevated, borderRadius: '32px', border: `1px solid ${colors.brand.primary}10`, boxShadow: '0 10px 30px -10px rgba(45,51,33,0.05)' }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                                    style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                    <item.icon size={28} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.02em' }}>{item.title}</h3>
                                <p style={{ fontSize: '16px', color: colors.text.secondary, lineHeight: 1.7, fontWeight: 400 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== VALUE PROPOSITION ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '64px' }}>
                        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            {[
                                { value: '100%', label: 'Sustainable', color: colors.brand.primary },
                                { value: '500+', label: 'Projects', color: colors.brand.accent },
                                { value: '0', label: 'Carbon Footprint', color: colors.brand.secondary },
                                { value: '∞', label: 'Possibilities', color: colors.brand.primary },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center" style={{ padding: '32px', backgroundColor: colors.bg.secondary, borderRadius: '20px' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: stat.color, marginBottom: '8px' }}>{stat.value}</div>
                                    <div style={{ fontSize: '13px', color: colors.text.muted }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 600, marginBottom: '24px' }}>Our Promise</h2>
                            <div className="space-y-5">
                                {[
                                    { title: 'Biophilic Design', desc: 'Connecting people with nature through every element.' },
                                    { title: 'Natural Materials', desc: 'Sustainably sourced, always earth-friendly.' },
                                    { title: 'Harmonious Spaces', desc: 'Balance between form, function, and feeling.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.brand.primary}15` }}>
                                            <Check size={16} color={colors.brand.primary} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{item.title}</h4>
                                            <p style={{ fontSize: '14px', color: colors.text.secondary }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '16px' }}>Simple Pricing</h2>
                        <p style={{ fontSize: '18px', color: colors.text.secondary }}>Choose the path that fits your growth</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Seedling', price: '$29', color: colors.brand.accent, features: ['Core Components', 'Basic Support', 'Community Access'] },
                            { name: 'Sapling', price: '$79', color: colors.brand.primary, features: ['Advanced Features', 'Priority Support', 'Component Library', 'Design Files'] },
                            { name: 'Forest', price: '$199', color: colors.forest.deep, features: ['Unlimited Access', '24/7 Support', 'Custom Integration', 'Team License'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group overflow-hidden"
                                style={{ padding: '64px 40px', backgroundColor: i === 1 ? colors.brand.primary : colors.bg.elevated, color: i === 1 ? 'white' : colors.text.primary, borderRadius: '40px', border: `1px solid ${colors.brand.primary}10`, boxShadow: i === 1 ? `0 32px 64px -16px ${colors.brand.primary}40` : '0 16px 32px -12px rgba(45,51,33,0.05)' }}>
                                {i === 1 && <div className="absolute top-0 right-0 py-2 px-6 rounded-bl-3xl" style={{ backgroundColor: colors.forest.leaf, fontSize: '12px', fontWeight: 800 }}>MOST POPULAR</div>}
                                <h3 style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '24px', opacity: 0.8 }}>{plan.name.toUpperCase()}</h3>
                                <div style={{ fontSize: '56px', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '40px' }}>{plan.price}</div>
                                <ul className="space-y-4 mb-12 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <Check size={18} style={{ opacity: 0.6 }} />
                                            <span style={{ fontSize: '15px', fontWeight: 500, opacity: 0.9 }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="transition-all active:scale-95"
                                    style={{ width: '100%', padding: '18px', borderRadius: '20px', fontSize: '16px', fontWeight: 700, backgroundColor: i === 1 ? 'white' : colors.brand.primary, color: i === 1 ? colors.brand.primary : 'white' }}>
                                    Start Growing
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'Is the design system sustainable?', a: 'Yes, we follow conscious design principles that prioritize long-term utility and minimal digital waste.' },
                            { q: 'Can I customize the organic shapes?', a: 'Every shape is SVG-based and fully customizable to fit your specific brand rhythm.' },
                            { q: 'What is "Evergreen" updates?', a: 'Our commitment to continuous growth—you receive all future components and refinements for life.' },
                        ].map((item, i) => (
                            <div key={i} className="overflow-hidden transition-all duration-300" style={{ borderRadius: '24px', backgroundColor: colors.bg.elevated, border: `1px solid ${colors.brand.primary}10`, boxShadow: expandedFaq === i ? '0 12px 24px -8px rgba(45,51,33,0.1)' : 'none' }}>
                                <button className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-neutral-50" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span style={{ fontSize: '18px', fontWeight: 600, color: colors.text.primary }}>{item.q}</span>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300" style={{ backgroundColor: `${colors.brand.primary}10`, transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <ChevronDown size={18} color={colors.brand.primary} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div style={{ padding: '0 24px 24px', fontSize: '16px', color: colors.text.secondary, lineHeight: 1.7, fontWeight: 400 }}>{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto text-center" style={{ padding: '64px 40px', background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`, borderRadius: '32px', color: colors.text.inverse }}>
                    <h2 style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: 600, marginBottom: '16px' }}>Connect with Nature</h2>
                    <p style={{ fontSize: '17px', opacity: 0.9, marginBottom: '32px' }}>Ready to bring organic harmony to your space?</p>
                    <div className="flex justify-center gap-4" style={{ flexDirection: isMobile ? 'column' : 'row', maxWidth: '400px', margin: '0 auto' }}>
                        <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '16px 20px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '15px' }} />
                        <button style={{ padding: '16px 32px', backgroundColor: colors.bg.elevated, color: colors.brand.primary, borderRadius: '12px', fontSize: '15px', fontWeight: 600 }}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: `${spacing.lg}`, borderTop: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto flex justify-between items-center gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-[14px] flex items-center justify-center transition-transform group-hover:rotate-[15deg] duration-500"
                            style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`, boxShadow: `0 8px 16px ${colors.brand.primary}30` }}>
                            <Leaf size={20} color="white" />
                        </div>
                        <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', color: colors.text.primary }}>Evergreen</span>
                    </div>
                    <span style={{ fontSize: '13px', color: colors.text.muted }}>© 2025 Natura Design. Made with 💚</span>
                    <div className="flex gap-4">
                        {[Leaf, TreeDeciduous, Sprout].map((Icon, i) => (
                            <Icon key={i} size={18} color={colors.text.muted} className="hover:opacity-70 cursor-pointer" />
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};
