import { useState } from 'react';
import { Menu, X, ChevronDown, Ticket, Star, Music, Film, MapPin, Calendar, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S42TicketStubPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#1A1A2E', color: '#EAEAEA', fontFamily: '"Roboto Mono", monospace' }}>
            <style>{`
                .ticket-stub { 
                    background: linear-gradient(135deg, #16213E 0%, #0F3460 100%); 
                    border: 2px solid #E94560; 
                    position: relative;
                }
                .ticket-stub::before, .ticket-stub::after {
                    content: '';
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    background: #1A1A2E;
                    border: 2px solid #E94560;
                    border-radius: 50%;
                }
                .ticket-stub::before { left: -14px; top: 50%; transform: translateY(-50%); }
                .ticket-stub::after { right: -14px; top: 50%; transform: translateY(-50%); }
                .perforation { 
                    background-image: repeating-linear-gradient(0deg, transparent, transparent 8px, #E94560 8px, #E94560 10px);
                    width: 2px;
                }
                .barcode { 
                    background: repeating-linear-gradient(90deg, #fff 0px, #fff 2px, transparent 2px, transparent 4px, #fff 4px, #fff 8px, transparent 8px, transparent 10px);
                    height: 40px;
                }
                .neon-glow { text-shadow: 0 0 10px #E94560, 0 0 20px #E94560, 0 0 30px #E94560; }
            `}</style>

            <header className="sticky top-0 z-50 bg-[#16213E]/95 backdrop-blur-sm border-b border-pink-600/30">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded flex items-center justify-center">
                            <Ticket size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-wider">STUB<span className="text-pink-500">UI</span></span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Events', 'Venues', 'Artists', 'Archive'].map((item) => (
                                <span key={item} className="text-sm uppercase tracking-widest cursor-pointer hover:text-pink-500 transition-colors">{item}</span>
                            ))}
                            <button className="px-6 py-2 bg-pink-600 text-white font-bold uppercase tracking-widest hover:bg-pink-500 transition-colors">Get Tickets</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="border-t border-pink-600/30 bg-[#16213E]">
                        {['Events', 'Venues', 'Artists', 'Archive'].map((item) => (
                            <div key={item} className="p-4 text-lg uppercase tracking-widest border-b border-pink-600/20">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            <section className="py-20 px-6">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-pink-600/20 border border-pink-600/50 rounded">
                            <Sparkles size={16} className="text-pink-500" />
                            <span className="text-sm uppercase tracking-widest text-pink-400">Limited Release</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                            YOUR <span className="neon-glow text-pink-500">TICKET</span><br />TO GREATNESS
                        </h1>
                        <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
                            Create event-inspired interfaces with authentic ticket stub aesthetics. Admit one to amazing design.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-pink-600 text-white font-bold uppercase tracking-widest hover:bg-pink-500 transition-colors flex items-center gap-2">
                                <Ticket size={20} /> Get Access
                            </button>
                            <button className="px-8 py-4 border-2 border-gray-600 text-white font-bold uppercase tracking-widest hover:border-pink-500 transition-colors">View Events</button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="ticket-stub p-8 mx-auto max-w-md">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-pink-400 mb-1">General Admission</div>
                                    <div className="text-3xl font-black">STUBUI LIVE</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-pink-500">$99</div>
                                    <div className="text-xs text-gray-400">ADMIT ONE</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                                <div><Calendar size={14} className="mb-1 text-pink-500" /><div className="text-gray-400">DEC 31</div></div>
                                <div><Clock size={14} className="mb-1 text-pink-500" /><div className="text-gray-400">8:00 PM</div></div>
                                <div><MapPin size={14} className="mb-1 text-pink-500" /><div className="text-gray-400">NYC</div></div>
                            </div>
                            <div className="barcode mb-4"></div>
                            <div className="text-center text-xs tracking-widest text-gray-500">NO. 00001234</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-[#16213E]">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-wider">Featured Acts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Music, title: "Live Music", desc: "Concert vibes" },
                            { icon: Film, title: "Premieres", desc: "Movie nights" },
                            { icon: Users, title: "Conferences", desc: "Network events" },
                            { icon: Star, title: "VIP Access", desc: "Exclusive perks" }
                        ].map((f, i) => (
                            <div key={i} className="ticket-stub p-6 text-center hover:border-pink-400 transition-colors">
                                <f.icon size={48} className="mx-auto mb-4 text-pink-500" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{f.title}</h3>
                                <p className="text-gray-400 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-wider">Fan Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Alex R.", text: "Best design system ever!", event: "STUBUI Conf 2024" },
                            { name: "Jordan M.", text: "Incredible attention to detail.", event: "Launch Party" },
                            { name: "Casey T.", text: "My clients love it!", event: "Premium User" }
                        ].map((t, i) => (
                            <div key={i} className="ticket-stub p-6">
                                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400" fill="currentColor" />)}</div>
                                <p className="text-lg mb-4">"{t.text}"</p>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold text-pink-400">{t.name}</span>
                                    <span className="text-gray-500">{t.event}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-[#0F3460]">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-wider">Ticket Tiers</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        {[
                            { name: 'GENERAL', price: '$29', features: ['Standard access', 'Email support'] },
                            { name: 'VIP', price: '$79', features: ['Priority access', 'Premium support', 'Backstage'], featured: true },
                            { name: 'ALL-ACCESS', price: '$149', features: ['Unlimited', 'White label', 'Custom'] }
                        ].map((plan) => (
                            <div key={plan.name} className={`ticket-stub p-8 text-center ${plan.featured ? 'border-yellow-400 scale-105' : ''}`}>
                                {plan.featured && <div className="text-xs text-yellow-400 uppercase tracking-widest mb-4">★ BEST VALUE ★</div>}
                                <h3 className="text-2xl font-black uppercase tracking-wider mb-4">{plan.name}</h3>
                                <div className="text-5xl font-black mb-6 text-pink-500">{plan.price}</div>
                                <ul className="space-y-2 mb-8 text-sm text-gray-300">{plan.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
                                <button className={`w-full py-3 font-bold uppercase tracking-widest ${plan.featured ? 'bg-yellow-400 text-black' : 'bg-pink-600 text-white'}`}>Get Ticket</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-wider">FAQs</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Are tickets refundable?', a: 'Yes, full refund up to 7 days before the event.' },
                            { q: 'Can I transfer my ticket?', a: 'Tickets can be transferred to any email address.' },
                            { q: 'Is there group pricing?', a: 'Contact us for groups of 10 or more.' }
                        ].map((item, i) => (
                            <div key={i} className="ticket-stub overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold uppercase tracking-wider">{item.q}</span>
                                    <ChevronDown size={20} className={`text-pink-500 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && <div className="p-6 pt-0 text-gray-400 border-t border-pink-600/30">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-rose-600">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-wider">Get Your Ticket</h2>
                    <button className="px-12 py-5 bg-white text-pink-600 font-black uppercase tracking-widest inline-flex items-center gap-3 hover:bg-gray-100 transition-colors">
                        Access Now <ArrowRight size={24} />
                    </button>
                </div>
            </section>

            <footer className="bg-[#0F0F1A] text-gray-500 py-12 px-6 border-t border-pink-600/20">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Ticket size={24} className="text-pink-500" />
                        <span className="text-xl font-bold text-white tracking-wider">STUBUI</span>
                    </div>
                    <div className="text-sm">© 2025 StubUI. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
};
