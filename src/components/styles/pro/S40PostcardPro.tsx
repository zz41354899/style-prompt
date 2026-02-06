import { useState } from 'react';
import { Menu, X, ChevronDown, MapPin, Heart, Sun, Camera, Plane, Mountain, Compass, Star, ArrowRight } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S40PostcardPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FDF6E3', color: '#3D3D3D', fontFamily: '"Caveat", "Brush Script MT", cursive' }}>
            <style>{`
                .postcard-shadow { box-shadow: 0 8px 30px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05); }
                .stamp { border: 2px dashed #B8860B; background: linear-gradient(135deg, #FFF8DC 0%, #FAEBD7 100%); }
                .postmark { border: 2px solid #8B4513; border-radius: 50%; opacity: 0.6; transform: rotate(-15deg); }
                .handwritten { font-family: "Caveat", "Brush Script MT", cursive; }
                .torn-edge { clip-path: polygon(0 0, 5% 2%, 10% 0, 15% 3%, 20% 0, 25% 2%, 30% 0, 35% 3%, 40% 0, 45% 2%, 50% 0, 55% 2%, 60% 0, 65% 3%, 70% 0, 75% 2%, 80% 0, 85% 3%, 90% 0, 95% 2%, 100% 0, 100% 100%, 0 100%); }
                .paper-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
                    pointer-events: none;
                }
                .airmail-border {
                    background-image: repeating-linear-gradient(135deg, #D9534F 0, #D9534F 10px, transparent 10px, transparent 20px, #337AB7 20px, #337AB7 30px, transparent 30px, transparent 40px);
                    padding: 8px;
                }
            `}</style>

            <div className="absolute inset-0 paper-texture z-50 pointer-events-none mix-blend-multiply"></div>

            <header className="sticky top-0 z-50 bg-amber-100/95 backdrop-blur-sm border-b-2 border-amber-200">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="stamp p-3 transform rotate-6">
                            <Plane size={28} className="text-amber-700" />
                        </div>
                        <span className="text-3xl handwritten text-amber-800">Greetings from <span className="text-amber-600">UI</span></span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Destinations', 'Stories', 'Gallery', 'Contact'].map((item) => (
                                <span key={item} className="text-xl handwritten cursor-pointer hover:text-amber-600 transition-colors">{item}</span>
                            ))}
                            <button className="px-6 py-2 bg-amber-600 text-white handwritten text-xl rounded-full hover:bg-amber-700 transition-colors">Book Now</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="border-t border-amber-200 bg-amber-50">
                        {['Destinations', 'Stories', 'Gallery', 'Contact'].map((item) => (
                            <div key={item} className="p-4 text-2xl handwritten border-b border-amber-200">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            <section className="py-20 px-6">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-100 rounded-full">
                            <Sun size={20} className="text-amber-600" />
                            <span className="text-lg handwritten text-amber-700">Wish you were here!</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl handwritten leading-tight mb-8 text-amber-900">
                            Adventures<br />Await You
                        </h1>
                        <p className="text-2xl handwritten text-amber-700 max-w-lg mb-10 leading-relaxed">
                            Create beautiful travel memories with our vintage-inspired design components. Every pixel tells a story.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-amber-600 text-white handwritten text-2xl rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2 postcard-shadow">
                                <Compass size={24} /> Explore
                            </button>
                            <button className="px-8 py-4 border-2 border-amber-600 text-amber-700 handwritten text-2xl rounded-lg hover:bg-amber-50 transition-colors">View Stories</button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="bg-white postcard-shadow transform rotate-3 relative airmail-border">
                            <div className="bg-white p-6 h-full relative">
                                <div className="absolute top-4 right-4 stamp p-4 transform rotate-12 bg-white z-10">
                                    <div className="text-xs text-amber-800 font-bold">AIR MAIL</div>
                                    <div className="text-2xl handwritten text-amber-600">$0.55</div>
                                </div>
                                {/* Postmark SVG */}
                                <div className="absolute top-4 right-16 opacity-70 transform -rotate-12 pointer-events-none z-20">
                                    <svg width="100" height="100" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#8B4513" strokeWidth="2" />
                                        <path id="curve" d="M 20 50 A 30 30 0 1 1 80 50" fill="transparent" />
                                        <text width="100">
                                            <textPath href="#curve" startOffset="50%" textAnchor="middle" fill="#8B4513" fontSize="10" className="uppercase font-bold tracking-widest">
                                                Postcard Service
                                            </textPath>
                                        </text>
                                        <text x="50" y="60" textAnchor="middle" fill="#8B4513" fontSize="12" fontWeight="bold">2025</text>
                                        <line x1="10" y1="50" x2="30" y2="50" stroke="#8B4513" strokeWidth="2" strokeDasharray="4 2" />
                                        <line x1="70" y1="50" x2="90" y2="50" stroke="#8B4513" strokeWidth="2" strokeDasharray="4 2" />
                                    </svg>
                                </div>
                                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 mb-4 flex items-center justify-center rounded">
                                    <Mountain size={80} className="text-amber-300" strokeWidth={1} />
                                </div>
                                <div className="handwritten text-2xl text-amber-800">Having a wonderful time!</div>
                                <div className="flex items-center gap-2 mt-2 text-amber-600">
                                    <MapPin size={16} /> Somewhere Beautiful
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-amber-50 torn-edge">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-5xl handwritten text-center text-amber-800 mb-16">Popular Destinations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Mountain, title: "Mountains", desc: "Breathtaking views" },
                            { icon: Sun, title: "Beaches", desc: "Golden sunsets" },
                            { icon: Camera, title: "Cities", desc: "Urban adventures" },
                            { icon: Compass, title: "Trails", desc: "Hidden paths" }
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-6 postcard-shadow text-center hover:transform hover:-rotate-2 transition-transform">
                                <f.icon size={48} className="mx-auto mb-4 text-amber-600" strokeWidth={1.5} />
                                <h3 className="text-2xl handwritten text-amber-800 mb-2">{f.title}</h3>
                                <p className="text-amber-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-5xl handwritten text-center text-amber-800 mb-16">Traveler Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah & Tom", location: "Paris, France", text: "The most romantic trip ever!" },
                            { name: "Mike J.", location: "Tokyo, Japan", text: "An unforgettable adventure!" },
                            { name: "Emma L.", location: "Santorini, Greece", text: "Pure paradise on earth!" }
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-6 postcard-shadow transform hover:rotate-1 transition-transform">
                                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-amber-500" fill="currentColor" />)}</div>
                                <p className="text-xl handwritten text-amber-800 mb-4">"{t.text}"</p>
                                <div className="flex items-center gap-2 text-amber-600">
                                    <Heart size={16} fill="currentColor" />
                                    <span className="handwritten">{t.name}</span>
                                </div>
                                <div className="flex items-center gap-2 text-amber-500 text-sm mt-1">
                                    <MapPin size={14} /> {t.location}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-amber-700 text-white">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-5xl handwritten text-center mb-16">Travel Packages</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        {[
                            { name: 'Weekend', price: '$299', features: ['2-day trip', 'Hotel stay'] },
                            { name: 'Adventure', price: '$599', features: ['5-day trip', 'All inclusive', 'Guide'], featured: true },
                            { name: 'Premium', price: '$999', features: ['7-day trip', 'Luxury resort', 'VIP'] }
                        ].map((plan) => (
                            <div key={plan.name} className={`p-8 text-center ${plan.featured ? 'bg-white text-amber-800 scale-105' : 'bg-amber-600'} postcard-shadow rounded-lg`}>
                                <h3 className="text-3xl handwritten mb-4">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6">{plan.price}</div>
                                <ul className="space-y-2 mb-8 text-lg">{plan.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
                                <button className={`w-full py-3 handwritten text-xl rounded-full ${plan.featured ? 'bg-amber-600 text-white' : 'bg-white text-amber-700'}`}>Book Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl handwritten text-center text-amber-800 mb-12">Questions?</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'What is included in the package?', a: 'All packages include accommodation, transportation, and guided tours.' },
                            { q: 'Can I customize my trip?', a: 'Absolutely! Contact us for personalized itineraries.' },
                            { q: 'What is the cancellation policy?', a: 'Full refund up to 7 days before departure.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white postcard-shadow rounded-lg overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="handwritten text-xl text-amber-800">{item.q}</span>
                                    <ChevronDown size={20} className={`text-amber-600 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && <div className="p-6 pt-0 text-amber-700">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gradient-to-br from-amber-100 to-orange-100">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl handwritten text-amber-800 mb-8">Start Your Journey</h2>
                    <button className="px-12 py-5 bg-amber-600 text-white handwritten text-2xl rounded-full postcard-shadow inline-flex items-center gap-3 hover:bg-amber-700 transition-colors">
                        Plan Your Trip <ArrowRight size={24} />
                    </button>
                </div>
            </section>

            <footer className="bg-amber-800 text-amber-100 py-12 px-6">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Plane size={24} className="text-amber-300" />
                        <span className="text-2xl handwritten">Greetings from UI</span>
                    </div>
                    <div className="text-center md:text-right text-sm opacity-80">© 2025 Postcard UI. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
};
