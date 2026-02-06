import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Feather, BookOpen, Minus, Circle, Edit3, AlignLeft, Type, Paperclip } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S89MinimalistSerifPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A18] font-serif selection:bg-[#E8E6E1] selection:text-[#1A1A18] overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
                
                .font-serif-display { font-family: 'Playfair Display', serif; }
                .font-sans-body { font-family: 'Lato', sans-serif; }
                
                .text-vertical {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }

                .grain-overlay {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
                }
                
                .link-underline {
                    position: relative;
                }
                
                .link-underline::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: -2px;
                    left: 0;
                    background-color: currentColor;
                    transition: width 0.3s ease;
                }
                
                .link-underline:hover::after {
                    width: 100%;
                }
            `}</style>

            {/* Grain Texture */}
            <div className="fixed inset-0 grain-overlay pointer-events-none z-0"></div>

            {/* Vertical Line Decoration */}
            <div className="fixed left-6 md:left-12 top-0 bottom-0 w-[1px] bg-[#E8E6E1] z-0 hidden lg:block"></div>
            <div className="fixed right-6 md:right-12 top-0 bottom-0 w-[1px] bg-[#E8E6E1] z-0 hidden lg:block"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#E8E6E1]">
                <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-4 lg:pl-12">
                        <Feather size={24} strokeWidth={1} className="text-[#1A1A18]" />
                        <span className="text-2xl font-serif-display italic tracking-wide">Kinfolk</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12 font-sans-body text-xs tracking-[0.2em] font-medium lg:pr-12">
                            {['JOURNAL', 'COLLECTIONS', 'ABOUT', 'CONTACT'].map((item) => (
                                <a key={item} href="#" className="link-underline py-1 text-[#6B6B68] hover:text-[#1A1A18] transition-colors">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-3 border border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-white transition-all duration-300">
                                SUBSCRIBE
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-[#E8E6E1] transition-colors">
                            {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-24 left-0 w-full bg-[#FDFBF7] border-b border-[#E8E6E1] p-10 flex flex-col gap-8 animate-in slide-in-from-top-4 duration-500 z-50">
                        {['JOURNAL', 'COLLECTIONS', 'ABOUT', 'CONTACT'].map((item, i) => (
                            <a key={item} href="#" className="text-3xl font-serif-display italic text-[#1A1A18]">
                                <span className="text-xs font-sans-body not-italic mr-4 text-[#C0C0C0] align-middle">0{i + 1}</span>
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <main className="relative z-10 w-full max-w-[1400px] mx-auto border-x border-[#E8E6E1] lg:border-none">
                {/* Hero Section */}
                <section className="relative min-h-[85vh] flex items-center justify-center px-6 lg:px-24 pt-20 pb-20">
                    <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
                        <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#1A1A18]"></div>
                                <span className="font-sans-body text-xs tracking-[0.3em] uppercase text-[#6B6B68]">Volume 14</span>
                            </div>

                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif-display font-normal text-[#1A1A18] mb-10 leading-[1.1]">
                                The Art of <br /> <i className="font-light text-[#6B6B68]">Slow Living</i>
                            </h1>

                            <p className="font-sans-body text-[#555] mb-12 max-w-sm leading-relaxed font-light text-lg">
                                Exploring the beauty of simplicity, refined aesthetics, and the quiet moments that define our lives.
                            </p>

                            <div className="flex gap-8 items-center">
                                <button className="text-[#1A1A18] border-b border-[#1A1A18] pb-1 font-sans-body text-xs tracking-[0.2em] hover:text-[#6B6B68] hover:border-[#6B6B68] transition-all">
                                    READ NOW
                                </button>
                                <div className="w-1 h-1 bg-[#1A1A18] rounded-full"></div>
                                <button className="text-[#6B6B68] pb-1 font-sans-body text-xs tracking-[0.2em] hover:text-[#1A1A18] transition-all">
                                    FILM
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-1 hidden lg:flex justify-center h-full items-center order-2">
                            <div className="h-full w-[1px] bg-[#E8E6E1]"></div>
                        </div>

                        <div className="lg:col-span-6 relative order-1 lg:order-3">
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <div className="absolute inset-0 border border-[#1A1A18] transform translate-x-4 translate-y-4 z-0"></div>
                                <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1000" alt="Minimalist Interior" className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out" />
                            </div>

                            <div className="absolute -bottom-10 -left-10 z-20 bg-[#FDFBF7] p-8 max-w-xs shadow-sm hidden md:block border border-[#E8E6E1]">
                                <p className="font-serif-display italic text-xl leading-relaxed">"Simplicity is the ultimate sophistication."</p>
                                <p className="font-sans-body text-xs tracking-widest mt-4 text-[#6B6B68]">LEONARDO DA VINCI</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Editorial Grid */}
                <section className="py-32 px-6 lg:px-24 border-t border-[#E8E6E1]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <h2 className="text-4xl md:text-5xl font-serif-display">Selected Works</h2>
                        <a href="#" className="font-sans-body text-xs tracking-[0.2em] border-b border-[#E8E6E1] pb-1 hover:border-[#1A1A18] transition-colors">VIEW ARCHIVE</a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                        {[
                            { title: "Ceramics", date: "OCT 24", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800", cat: "CRAFT" },
                            { title: "Nordic Light", date: "OCT 18", img: "https://images.unsplash.com/photo-1471347324798-fa1fe78f6bf3?auto=format&fit=crop&q=80&w=800", cat: "TRAVEL" },
                            { title: "Morning Rituals", date: "OCT 12", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800", cat: "LIFESTYLE" }
                        ].map((post, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                                    <div className="absolute inset-0 bg-[#1A1A18]/0 group-hover:bg-[#1A1A18]/5 transition-colors duration-500 z-10"></div>
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                                </div>
                                <div className="flex justify-between items-start border-b border-[#E8E6E1] pb-4 mb-4">
                                    <span className="font-sans-body text-[10px] tracking-[0.2em] text-[#6B6B68]">{post.cat}</span>
                                    <span className="font-sans-body text-[10px] tracking-[0.2em] text-[#6B6B68]">{post.date}</span>
                                </div>
                                <h3 className="text-3xl font-serif-display font-normal group-hover:italic transition-all duration-300">{post.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values / Text Section */}
                <section className="py-32 px-6 lg:px-24 bg-[#F7F5F0] border-y border-[#E8E6E1]">
                    <div className="max-w-4xl mx-auto text-center">
                        <Feather size={32} strokeWidth={0.5} className="mx-auto mb-12 text-[#1A1A18]" />

                        <h2 className="text-4xl md:text-6xl font-serif-display leading-tight mb-12">
                            We believe in thoughtful design <br /> and <span className="italic text-[#6B6B68]">intentional</span> living.
                        </h2>

                        <div className="grid md:grid-cols-2 gap-16 text-left font-sans-body font-light text-[#555] leading-loose">
                            <p>
                                In a world of infinite noise, we choose silence. We curate objects, stories, and spaces that honor the materials from which they are made and the hands that crafted them.
                            </p>
                            <p>
                                Our philosophy is rooted in essentialism: removing the unnecessary so that the necessary may speak. This is not about having less, but making room for more of what matters.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Subscription / Pricing */}
                <section className="py-32 px-6 lg:px-24">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="text-4xl font-serif-display mb-6">Subscription</h2>
                            <p className="font-sans-body font-light text-[#6B6B68] leading-relaxed mb-8">
                                Join our community of readers and receive our quarterly print journal, delivered to your door.
                            </p>

                            <ul className="space-y-4 mb-12 font-sans-body text-sm font-light">
                                <li className="flex items-center gap-4">
                                    <Check size={16} strokeWidth={1} /> <span>Quarterly Print Issue</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Check size={16} strokeWidth={1} /> <span>Digital Archive Access</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Check size={16} strokeWidth={1} /> <span>Exclusive Essays</span>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="grid md:grid-cols-2 gap-px bg-[#E8E6E1] border border-[#E8E6E1]">
                                {[
                                    { name: "Digital", price: "$12", period: "Monthly" },
                                    { name: "Print + Digital", price: "$24", period: "Quarterly", highlight: true }
                                ].map((plan, i) => (
                                    <div key={i} className={`bg-[#FDFBF7] p-12 hover:bg-[#F7F5F0] transition-colors relative flex flex-col items-start justify-between min-h-[300px]`}>
                                        <div>
                                            <span className="font-sans-body text-xs tracking-[0.2em] uppercase text-[#6B6B68] block mb-4">{plan.name}</span>
                                            <div className="text-5xl font-serif-display mb-1">{plan.price}</div>
                                            <div className="font-serif-display italic text-[#6B6B68] text-sm">Billed {plan.period}</div>
                                        </div>

                                        <button className={`mt-auto w-full py-4 border font-sans-body text-xs tracking-[0.2em] transition-all hover:bg-[#1A1A18] hover:text-white ${plan.highlight ? 'border-[#1A1A18] text-[#1A1A18]' : 'border-[#E8E6E1] text-[#6B6B68]'}`}>
                                            SELECT PLAN
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-[#E8E6E1] py-20 px-6 lg:px-24 bg-[#FDFBF7]">
                    <div className="grid md:grid-cols-4 gap-12 lg:gap-24">
                        <div className="md:col-span-1">
                            <span className="font-serif-display italic text-2xl mb-8 block">Kinfolk</span>
                        </div>

                        <div className="md:col-span-1">
                            <h4 className="font-sans-body text-xs tracking-[0.2em] uppercase mb-6 text-[#1A1A18]">Explore</h4>
                            <ul className="space-y-4 font-serif-display italic text-[#6B6B68]">
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Journal</a></li>
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Collections</a></li>
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Films</a></li>
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Podcast</a></li>
                            </ul>
                        </div>

                        <div className="md:col-span-1">
                            <h4 className="font-sans-body text-xs tracking-[0.2em] uppercase mb-6 text-[#1A1A18]">Company</h4>
                            <ul className="space-y-4 font-serif-display italic text-[#6B6B68]">
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Press</a></li>
                            </ul>
                        </div>

                        <div className="md:col-span-1">
                            <h4 className="font-sans-body text-xs tracking-[0.2em] uppercase mb-6 text-[#1A1A18]">Social</h4>
                            <ul className="space-y-4 font-serif-display italic text-[#6B6B68]">
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Pinterest</a></li>
                                <li><a href="#" className="hover:text-[#1A1A18] transition-colors">Twitter</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-[#E8E6E1] flex flex-col md:flex-row justify-between items-center gap-6 font-sans-body text-[10px] tracking-[0.1em] text-[#6B6B68] uppercase">
                        <div>© 2025 MINIMALIST SERIF</div>
                        <div className="flex gap-8">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Sitemap</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
