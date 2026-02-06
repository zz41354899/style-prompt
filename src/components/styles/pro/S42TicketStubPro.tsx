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
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Roboto+Mono:wght@400;500&display=swap');

                .font-ticket { font-family: 'Barlow Condensed', sans-serif; }
                .font-mono-ticket { font-family: 'Roboto Mono', monospace; }

                .ticket-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
                }

                .ticket-stub { 
                    background: linear-gradient(135deg, #22223b 0%, #1a1a2e 100%); 
                    position: relative;
                    clip-path: polygon(
                        0% 0%, 
                        100% 0%, 
                        100% calc(50% - 10px), 
                        calc(100% - 10px) 50%, 
                        100% calc(50% + 10px), 
                        100% 100%, 
                        0% 100%, 
                        0% calc(50% + 10px), 
                        10px 50%, 
                        0% calc(50% - 10px)
                    );
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .ticket-stub:hover {
                    transform: translateY(-5px) rotate(1deg);
                }
                
                .perforation-line {
                    background-image: linear-gradient(to bottom, #333 50%, transparent 50%);
                    background-size: 2px 8px;
                    width: 2px;
                    height: 100%;
                    position: absolute;
                    right: 25%;
                    top: 0;
                    opacity: 0.5;
                }

                .barcode-v { 
                    background: repeating-linear-gradient(90deg, 
                        #eee 0px, #eee 4px, 
                        transparent 4px, transparent 6px, 
                        #eee 6px, #eee 14px, 
                        transparent 14px, transparent 18px
                    );
                    height: 48px;
                    width: 100%;
                }

                .rip-effect:hover .perforation-line {
                    opacity: 1;
                }
            `}</style>

            <header className="sticky top-0 z-50 bg-[#1A1A2E]/95 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-600 rounded-sm flex items-center justify-center transform rotate-3 border-2 border-white/20">
                            <Ticket size={24} className="text-white transform -rotate-3" />
                        </div>
                        <span className="text-3xl font-black tracking-tighter font-ticket uppercase">STUB<span className="text-pink-500">_UI</span></span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Events', 'Lineup', 'Venues', 'Merch'].map((item) => (
                                <span key={item} className="text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-pink-500 transition-colors font-ticket">{item}</span>
                            ))}
                            <button className="px-6 py-2 bg-pink-600 text-white font-black uppercase tracking-widest hover:bg-pink-500 transition-all font-ticket skew-x-[-10deg] hover:skew-x-0">
                                <span className="inline-block transform skew-x-[10deg] hover:skew-x-0">Buy Tickets</span>
                            </button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="border-t border-white/10 bg-[#1A1A2E]">
                        {['Events', 'Lineup', 'Venues', 'Merch'].map((item) => (
                            <div key={item} className="p-4 text-xl font-black uppercase tracking-widest border-b border-white/5 font-ticket">{item}</div>
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
                    <div className="hidden lg:block relative">
                        {/* Main Ticket */}
                        <div className="relative z-10 bg-[#EAEAEA] text-gray-900 rounded-lg shadow-2xl overflow-hidden max-w-md mx-auto transform rotate-2 rip-effect">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#1A1A2E] rounded-r-full"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#1A1A2E] rounded-l-full"></div>
                            <div className="absolute right-32 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-gray-400"></div>

                            <div className="flex">
                                <div className="flex-1 p-8 pr-12">
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono-ticket">ADMIT ONE</div>
                                    <h2 className="text-5xl font-black font-ticket mb-4 leading-none">STUBUI<br />FEST '25</h2>
                                    <div className="flex items-center gap-4 text-sm font-bold font-mono-ticket text-gray-600">
                                        <div className="flex items-center gap-1"><Calendar size={14} /> OCT 15</div>
                                        <div className="flex items-center gap-1"><Clock size={14} /> 20:00</div>
                                    </div>
                                </div>
                                <div className="w-32 bg-gray-900 text-white p-6 flex flex-col items-center justify-center relative">
                                    <div className="text-3xl font-black font-ticket text-pink-500 rotate-90 whitespace-nowrap mb-8 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">NO. 839210</div>
                                    <div className="absolute bottom-4 left-0 right-0 px-2">
                                        <div className="h-8 w-full bg-white opacity-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Tickets */}
                        <div className="absolute top-4 left-12 w-full max-w-md h-full bg-pink-600 rounded-lg transform -rotate-3 opacity-30 blur-sm pointer-events-none z-0"></div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-[#16213E] relative">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-wider font-ticket">FEATURED ACTS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Music, title: "LIVE MUSIC", desc: "CONCERT VIBES" },
                            { icon: Film, title: "PREMIERES", desc: "MOVIE NIGHTS" },
                            { icon: Users, title: "CONFERENCES", desc: "NETWORKING" },
                            { icon: Star, title: "VIP ACCESS", desc: "EXCLUSIVE PERKS" }
                        ].map((f, i) => (
                            <div key={i} className="ticket-stub p-0 group">
                                <div className="p-8 h-full flex flex-col items-center bg-[#1A1A2E] group-hover:bg-[#20203a] transition-colors border-l-4 border-pink-600">
                                    <div className="w-16 h-16 rounded-full bg-pink-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <f.icon size={32} className="text-pink-500" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-wider mb-2 font-ticket">{f.title}</h3>
                                    <p className="text-gray-400 text-sm font-mono-ticket tracking-widest">{f.desc}</p>
                                    <div className="mt-6 w-full h-1 bg-gray-800 relative">
                                        <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0F0F1A] opacity-50 ticket-texture"></div>
                <div className="max-w-screen-xl mx-auto relative z-10">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-wider font-ticket">FAN REVIEWS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "ALEX R.", text: "BEST DESIGN SYSTEM EVER!", event: "STUBUI CONF 2024" },
                            { name: "JORDAN M.", text: "INCREDIBLE ATTENTION TO DETAIL.", event: "LAUNCH PARTY" },
                            { name: "CASEY T.", text: "MY CLIENTS LOVE IT!", event: "PREMIUM USER" }
                        ].map((t, i) => (
                            <div key={i} className="bg-[#EAEAEA] text-gray-900 clip-path-ticket p-0 relative transform hover:-rotate-1 transition-transform">
                                <div className="absolute top-0 bottom-0 left-0 w-2 bg-pink-600"></div>
                                <div className="p-8 pl-10">
                                    <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-pink-600" fill="currentColor" />)}</div>
                                    <p className="text-xl mb-6 font-bold font-ticket leading-none">"{t.text}"</p>
                                    <div className="border-t-2 border-dashed border-gray-400 pt-4 flex justify-between items-center text-sm font-mono-ticket">
                                        <span className="font-bold">{t.name}</span>
                                        <span className="text-gray-500 text-xs">{t.event}</span>
                                    </div>
                                </div>
                                {/* Perforations */}
                                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#1A1A2E] rounded-full"></div>
                                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#1A1A2E] rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#16162a]">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-tighter font-ticket">SELECT TIER</h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                        {[
                            { name: 'GENERAL', price: '$29', features: ['Entry to grounds', 'Standard Support'], color: 'bg-white text-gray-900 border-gray-200' },
                            { name: 'VIP ACCESS', price: '$79', features: ['Priority Entry', 'Lounge Access', 'Free Drink'], featured: true, color: 'bg-pink-600 text-white border-pink-500' },
                            { name: 'BACKSTAGE', price: '$149', features: ['Artist Meet & Greet', 'All Zones', 'Afterparty'], color: 'bg-gray-800 text-white border-gray-700' }
                        ].map((plan) => (
                            <div key={plan.name} className={`ticket-stub p-0 overflow-hidden ${plan.featured ? 'transform scale-105 z-10' : ''}`}>
                                <div className={`p-8 ${plan.color} relative h-full flex flex-col`}>
                                    {plan.featured && (
                                        <div className="absolute top-4 right-4 text-xs font-black uppercase tracking-widest bg-white text-pink-600 px-2 py-1 rounded-sm rotate-12">
                                            Selling Fast
                                        </div>
                                    )}
                                    <div className="border-b-2 border-dashed border-current/20 pb-6 mb-6">
                                        <h3 className="text-3xl font-black uppercase tracking-tight font-ticket mb-2">{plan.name}</h3>
                                        <div className="text-5xl font-black font-ticket">{plan.price}</div>
                                    </div>

                                    <ul className="space-y-4 mb-8 text-sm font-bold tracking-wide font-mono-ticket opacity-80 flex-grow">
                                        {plan.features.map((f) => <li key={f} className="flex items-center gap-2">✓ {f}</li>)}
                                    </ul>

                                    <div className="barcode-v opacity-50 mb-6"></div>

                                    <button className={`w-full py-4 font-black uppercase tracking-widest font-ticket border-2 border-current hover:bg-black/10 transition-colors`}>
                                        SECURE TICKET
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#16213E]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-wider font-ticket">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'ARE TICKETS REFUNDABLE?', a: 'Yes, full refund up to 7 days before the event.' },
                            { q: 'CAN I TRANSFER MY TICKET?', a: 'Tickets can be transferred to any email address via the portal.' },
                            { q: 'IS THERE GROUP PRICING?', a: 'Contact us for groups of 10 or more for special rates.' }
                        ].map((item, i) => (
                            <div key={i} className="border-2 border-[#2A2A4A] bg-[#1A1A2E] p-1">
                                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-[#20203a] transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold uppercase tracking-wider font-ticket text-xl">{item.q}</span>
                                    <div className={`transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}>
                                        <ChevronDown size={24} className="text-pink-500" />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 text-gray-400 font-mono-ticket text-sm leading-relaxed border-t border-dashed border-[#2A2A4A] pt-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 px-6 bg-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]"></div>
                <div className="max-w-screen-lg mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter font-ticket text-white leading-none">
                        GET YOUR<br />TICKET NOW
                    </h2>
                    <button className="px-16 py-6 bg-black text-white font-black uppercase tracking-widest text-xl inline-flex items-center gap-4 hover:bg-gray-900 transition-all font-ticket transform -rotate-1 hover:rotate-0 hover:scale-105 shadow-2xl">
                        ACCESS EVENT <ArrowRight size={28} />
                    </button>
                </div>
            </section>

            <footer className="bg-[#0b0b14] text-gray-500 py-16 px-6 border-t-4 border-pink-600">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-black text-2xl rotate-3">S</div>
                        <span className="text-3xl font-black text-white tracking-tighter font-ticket">STUB<span className="text-gray-700">UI</span></span>
                    </div>

                    <div className="flex gap-8 text-sm font-bold tracking-widest uppercase font-ticket">
                        <a href="#" className="hover:text-pink-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-pink-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-pink-500 transition-colors">Support</a>
                    </div>

                    <div className="text-xs font-mono-ticket tracking-widest opacity-50">© 2025 STUBUI INC.</div>
                </div>
            </footer>
        </div>
    );
};
