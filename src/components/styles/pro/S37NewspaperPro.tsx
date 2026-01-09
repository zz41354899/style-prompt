import { useState } from 'react';
import { Menu, X, ChevronDown, Newspaper, BookOpen, Clock, TrendingUp, Award, Users, FileText, ArrowRight } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S37NewspaperPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#FDF8F3',
        paper: '#FAF5EF',
        ink: '#1A1A1A',
        headline: '#000000',
        accent: '#8B0000',
        muted: '#666666',
        border: '#D4C5B5',
        cream: '#F5EDE0'
    };

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg, color: colors.ink, fontFamily: '"Playfair Display", "Times New Roman", serif' }}>

            {/* Global Styles */}
            <style>{`
                .newspaper-column {
                    column-count: 2;
                    column-gap: 2rem;
                    column-rule: 1px solid ${colors.border};
                }
                @media (max-width: 768px) {
                    .newspaper-column {
                        column-count: 1;
                    }
                }
                .drop-cap::first-letter {
                    float: left;
                    font-size: 4rem;
                    line-height: 0.8;
                    padding-right: 0.5rem;
                    font-weight: 700;
                }
                .headline-underline {
                    border-bottom: 3px double ${colors.ink};
                }
                .dateline {
                    font-style: italic;
                    color: ${colors.muted};
                }
            `}</style>

            {/* Masthead */}
            <header className="border-b-4 border-double border-black bg-white">
                <div className="max-w-screen-xl mx-auto">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center px-6 py-2 border-b border-gray-300 text-xs uppercase tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
                        <span className="dateline">Est. 1892</span>
                        <span>Vol. CXXXI, No. 47</span>
                        <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>

                    {/* Masthead Title */}
                    <div className="text-center py-8 px-6">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase" style={{ fontFamily: '"Old Standard TT", "Playfair Display", serif' }}>
                            The Daily Chronicle
                        </h1>
                        <p className="text-sm tracking-[0.5em] uppercase mt-2 text-gray-600">"All The News That's Fit To Print"</p>
                    </div>

                    {/* Navigation */}
                    <div className="border-t border-b border-gray-400 bg-gray-50">
                        <div className="flex items-center justify-between px-6 py-3">
                            {!isMobile && (
                                <nav className="flex items-center gap-8">
                                    {['Front Page', 'World', 'Business', 'Opinion', 'Arts'].map((item) => (
                                        <span key={item} className="text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-red-800 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </nav>
                            )}
                            <div className="flex items-center gap-4">
                                <button className="px-6 py-2 text-sm font-bold uppercase tracking-widest border-2 border-black hover:bg-black hover:text-white transition-colors">
                                    Subscribe
                                </button>
                            </div>
                            {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                        </div>
                    </div>

                    {menuOpen && isMobile && (
                        <div className="border-t border-gray-300 bg-white">
                            {['Front Page', 'World', 'Business', 'Opinion', 'Arts'].map((item) => (
                                <div key={item} className="p-4 text-lg font-bold uppercase tracking-widest border-b border-gray-200">{item}</div>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            {/* Hero - Breaking Story */}
            <section className="py-16 px-6 border-b-2 border-gray-300" style={{ backgroundColor: colors.cream }}>
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Story */}
                        <div className="lg:col-span-2 border-r border-gray-300 pr-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-red-800 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Breaking</span>
                                <span className="dateline text-sm">Just Now</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6 headline-underline pb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                                Revolutionary Design Framework Transforms Digital Landscape
                            </h2>
                            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-serif">
                                Industry experts hail breakthrough as "most significant advancement in user interface engineering this decade"
                            </p>
                            <div className="newspaper-column text-lg leading-relaxed">
                                <p className="drop-cap mb-4">
                                    In a stunning development that has sent shockwaves through the technology industry, a new design system has emerged that promises to fundamentally alter how digital experiences are crafted and delivered to users worldwide.
                                </p>
                                <p className="mb-4">
                                    The framework, which combines classical design principles with cutting-edge technology, has already been adopted by leading corporations across multiple sectors, signaling a paradigm shift in interface development.
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                                <span className="font-bold">By JOHN SMITH</span>
                                <span>|</span>
                                <span>Technology Correspondent</span>
                            </div>
                        </div>

                        {/* Sidebar Stories */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold uppercase tracking-widest border-b-2 border-black pb-2">More Headlines</h3>
                            {[
                                { title: 'Markets Rally on Tech Innovation News', time: '2 hours ago' },
                                { title: 'Industry Leaders Gather for Annual Summit', time: '4 hours ago' },
                                { title: 'New Study Reveals User Preference Trends', time: '6 hours ago' }
                            ].map((story, i) => (
                                <div key={i} className="border-b border-gray-300 pb-4">
                                    <h4 className="text-xl font-bold leading-tight hover:text-red-800 cursor-pointer transition-colors">{story.title}</h4>
                                    <span className="dateline text-sm">{story.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 bg-white border-b border-gray-300">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-12 text-center headline-underline pb-4 inline-block w-full">
                        Section Features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Newspaper, title: "Print Quality", desc: "Crisp typography and layouts" },
                            { icon: BookOpen, title: "Editorial", desc: "Curated content sections" },
                            { icon: Clock, title: "Timely", desc: "Real-time updates" },
                            { icon: TrendingUp, title: "Analytics", desc: "Readership insights" }
                        ].map((f, i) => (
                            <div key={i} className="text-center p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                                <f.icon size={40} className="mx-auto mb-4 text-red-800" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Reader Letters */}
            <section className="py-16 px-6" style={{ backgroundColor: colors.paper }}>
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-12 text-center">Letters to the Editor</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { author: "Margaret H.", location: "Boston, MA", text: "A breath of fresh air in modern design. Reminds me of the golden age of publishing." },
                            { author: "Robert J.", location: "Chicago, IL", text: "Finally, a framework that understands the importance of readability and structure." },
                            { author: "Elizabeth W.", location: "New York, NY", text: "Elegant, timeless, and incredibly functional. Highly recommended." }
                        ].map((letter, i) => (
                            <div key={i} className="bg-white p-6 border border-gray-300 shadow-sm">
                                <p className="text-lg italic mb-4 leading-relaxed">"{letter.text}"</p>
                                <div className="border-t border-gray-200 pt-4 text-sm">
                                    <div className="font-bold">{letter.author}</div>
                                    <div className="text-gray-500">{letter.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing - Subscription Plans */}
            <section className="py-16 px-6 bg-white border-y border-gray-300">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-4 text-center">Subscription Rates</h2>
                    <p className="text-center text-gray-600 mb-12">Choose your preferred delivery method</p>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        {[
                            { name: 'Digital', price: '$9.99/mo', features: ['Unlimited access', 'Mobile app', 'Newsletter'] },
                            { name: 'Print + Digital', price: '$19.99/mo', features: ['Sunday edition', 'All digital', 'Archives'], featured: true },
                            { name: 'Enterprise', price: '$49.99/mo', features: ['Team access', 'API access', 'Priority support'] }
                        ].map((plan) => (
                            <div key={plan.name} className={`p-8 text-center border-2 ${plan.featured ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                                {plan.featured && <div className="text-xs font-bold uppercase tracking-widest text-red-800 mb-2">Most Popular</div>}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-black mb-6">{plan.price}</div>
                                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                                    {plan.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 font-bold uppercase tracking-widest transition-colors ${plan.featured ? 'bg-black text-white hover:bg-gray-800' : 'border-2 border-black hover:bg-black hover:text-white'}`}>
                                    Subscribe Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-6" style={{ backgroundColor: colors.cream }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-12 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        {[
                            { q: 'How do I cancel my subscription?', a: 'You may cancel at any time by contacting our customer service department or through your account settings online.' },
                            { q: 'Is there a student discount?', a: 'Yes, we offer a 50% discount for verified students with a valid .edu email address.' },
                            { q: 'Can I access archives?', a: 'Print + Digital and Enterprise subscribers have unlimited access to our complete digital archives dating back to 1892.' }
                        ].map((item, i) => (
                            <div key={i} className="border border-gray-300 bg-white">
                                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold text-lg">{item.q}</span>
                                    <ChevronDown size={20} className={`transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-200">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Subscribe Today
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join millions of readers who trust The Daily Chronicle for their news
                    </p>
                    <button className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors inline-flex items-center gap-3">
                        Start Reading <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {['News', 'Opinion', 'Business', 'About'].map(col => (
                            <div key={col}>
                                <h4 className="font-bold text-white uppercase tracking-widest mb-4">{col}</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">World</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Politics</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                        <span>© 2025 The Daily Chronicle. All rights reserved.</span>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
