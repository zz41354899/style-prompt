import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Star, Smile, Rocket, PartyPopper, Puzzle, Gamepad, Trophy, Heart, Sun, Music, BookOpen, Cloud, Gamepad2 } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S85KidsPlayfulPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-[#FFF4F0] text-[#4A3B69] font-sans selection:bg-[#FFD93D] selection:text-[#4A3B69] overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Comic+Neue:wght@400;700&display=swap');
                
                .font-kids { font-family: 'Fredoka', sans-serif; }
                .font-comic { font-family: 'Comic Neue', sans-serif; }
                
                .blob-shape {
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }
                
                .bounce {
                    animation: bounce 2s infinite;
                }
                
                .float-slow {
                    animation: float 6s ease-in-out infinite;
                }
                
                .float-delay {
                    animation: float 6s ease-in-out infinite 2s;
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                
                .pattern-dot {
                    background-image: radial-gradient(#FF6B9D 20%, transparent 20%), radial-gradient(#6FDFFF 20%, transparent 20%);
                    background-color: #FFF4F0;
                    background-position: 0 0, 20px 20px;
                    background-size: 40px 40px;
                }

                .shadow-pop {
                    box-shadow: 6px 6px 0px 0px rgba(0,0,0,0.15);
                    transition: all 0.2s ease;
                }
                
                .shadow-pop:hover {
                    box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.15);
                    transform: translate(4px, 4px);
                }
            `}</style>

            {/* Background Decorations */}
            <div className="fixed inset-0 pattern-dot opacity-20 pointer-events-none z-0"></div>
            <div className="fixed top-20 left-10 text-[#FFD93D] opacity-40 animate-spin-slow pointer-events-none"><Sun size={80} /></div>
            <div className="fixed bottom-20 right-10 text-[#6FDFFF] opacity-40 float-slow pointer-events-none"><Cloud size={100} fill="currentColor" /></div>


            {/* Navbar */}
            <header className="sticky top-4 z-50 px-4 md:px-6">
                <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border-4 border-[#FF6B9D] rounded-full px-6 h-20 flex items-center justify-between shadow-pop">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#FFD93D] rounded-xl flex items-center justify-center text-[#4A3B69] border-2 border-[#4A3B69] transform -rotate-6">
                            <Star size={24} fill="white" strokeWidth={2.5} />
                        </div>
                        <span className="text-2xl font-black text-[#4A3B69] tracking-tight font-kids">Fun<span className="text-[#FF6B9D]">Zone</span>!</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-4">
                            {['Games', 'Learn', 'Create', 'Parents'].map((item, i) => (
                                <a key={item} href="#" className={`text-lg font-bold px-4 py-2 rounded-2xl hover:bg-opacity-20 transition-all font-kids ${i === 0 ? 'text-[#FF6B9D] hover:bg-[#FF6B9D]' :
                                    i === 1 ? 'text-[#6FDFFF] hover:bg-[#6FDFFF]' :
                                        i === 2 ? 'text-[#7ED957] hover:bg-[#7ED957]' :
                                            'text-[#FFD93D] hover:bg-[#FFD93D]'
                                    }`}>
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-3 bg-[#6FDFFF] hover:bg-[#4AC0E0] text-white text-lg font-black rounded-full transition-all border-b-4 border-[#41A8C5] active:border-b-0 active:translate-y-1 font-kids flex items-center gap-2">
                                Play Now <Gamepad2 size={20} />
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#FF6B9D] bg-[#FFF0F5] rounded-xl border-2 border-[#FF6B9D] transition-colors">
                            {menuOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-24 left-4 right-4 bg-white border-4 border-[#FFD93D] rounded-3xl shadow-xl p-6 flex flex-col gap-4 animate-bounce-in z-50">
                        {['Games', 'Learn', 'Create', 'Parents'].map((item) => (
                            <a key={item} href="#" className="text-xl font-bold text-[#4A3B69] py-3 border-b-2 border-dashed border-slate-100 font-kids text-center">
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-2 py-4 bg-[#FF6B9D] text-white font-black rounded-2xl border-b-4 border-[#E0487D] active:border-b-0 active:translate-y-1 font-kids">
                            Start Playing! 🎮
                        </button>
                    </div>
                )}
            </header>



            <main className="font-kids relative z-10 pt-10">
                {/* Hero Section */}
                <section className="pb-20 px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFF9C4] border-2 border-[#FFD93D] text-[#F9A825] font-bold text-lg mb-8 transform -rotate-2 hover:rotate-0 transition-transform cursor-default shadow-sm">
                                <Smile size={24} fill="#FFD93D" strokeWidth={2.5} />
                                <span>#1 Learning App for Kids!</span>
                            </div>

                            <h1 className="text-6xl lg:text-8xl font-black text-[#4A3B69] leading-[0.9] mb-6 tracking-tight drop-shadow-sm">
                                Lets Learn <br />
                                <span className="text-[#FF6B9D] inline-block transform hover:scale-110 transition-transform cursor-pointer">&</span> <span className="text-[#6FDFFF] inline-block bounce">Play!</span>
                            </h1>

                            <p className="text-2xl text-[#6B5B8A] mb-10 leading-relaxed font-comic font-bold max-w-md mx-auto lg:mx-0">
                                Join 2 million happy kids on an adventure of fun games, creative art, and magic stories! 🚀
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="px-10 py-5 bg-[#FF6B9D] text-white text-xl font-black rounded-3xl border-b-8 border-[#E6457A] hover:bg-[#FF4D88] active:border-b-0 active:translate-y-2 transition-all flex items-center justify-center gap-3 shadow-xl">
                                    Start Adventure <Rocket size={28} className="animate-pulse" />
                                </button>
                                <button className="px-10 py-5 bg-white text-[#6FDFFF] text-xl font-black rounded-3xl border-4 border-[#6FDFFF] hover:bg-[#F0F9FF] transition-all flex items-center justify-center gap-3 shadow-lg">
                                    <PartyPopper size={28} /> Watch Video
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            {/* Hero Image / Graphic */}
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                <div className="absolute inset-0 bg-[#FFD93D] rounded-full opacity-20 animate-blob mix-blend-multiply"></div>
                                <div className="absolute top-10 right-10 w-full h-full bg-[#6FDFFF] rounded-full opacity-20 animate-blob animation-delay-2000 mix-blend-multiply"></div>
                                <div className="absolute -bottom-10 -left-10 w-full h-full bg-[#FF6B9D] rounded-full opacity-20 animate-blob animation-delay-4000 mix-blend-multiply"></div>

                                <div className="relative z-10 w-full h-full bg-white rounded-[3rem] border-8 border-[#4A3B69] shadow-[16px_16px_0px_0px_rgba(74,59,105,0.2)] overflow-hidden flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500">
                                    <div className="w-full h-full relative overflow-hidden bg-[#E0F7FA]">
                                        {/* Simple CSS Art Composition */}
                                        <div className="absolute bottom-0 w-full h-1/3 bg-[#7ED957] rounded-t-[50%] scale-150"></div>
                                        <div className="absolute bottom-[20%] left-[20%] w-32 h-32 bg-[#FF6B9D] rounded-2xl rotate-12 border-4 border-[#4A3B69]"></div>
                                        <div className="absolute top-[20%] right-[20%] w-24 h-24 bg-[#FFD93D] rounded-full border-4 border-[#4A3B69] float-slow"></div>
                                        <div className="absolute top-[30%] left-[15%] text-[#6FDFFF]"><Star size={40} fill="currentColor" className="animate-spin-slow" /></div>

                                        {/* Floating Character Placeholder */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-[#4A3B69] font-black text-2xl bg-white px-6 py-3 rounded-2xl border-4 border-[#4A3B69] shadow-pop -rotate-3">
                                                Woohoo!
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="absolute -top-6 -right-6 bg-[#FF6B9D] text-white p-4 rounded-2xl border-4 border-white shadow-xl rotate-12 animate-bounce">
                                    <Trophy size={32} fill="#FFD93D" strokeWidth={2} />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-[#7ED957] text-white px-6 py-3 rounded-full border-4 border-white shadow-xl -rotate-6">
                                    <div className="font-black text-lg">kidSAFE Certified</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#4A3B69] mb-4">What's Inside? 📦</h2>
                            <p className="text-xl text-[#6B5B8A] font-bold font-comic">Everything your child needs to explore, learn, and grow!</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Gamepad, title: "Super Games", desc: "100+ fun mini-games that teach math & logic.", color: "#FF6B9D", bg: "#FFF0F5" },
                                { icon: BookOpen, title: "Story Time", desc: "Magical interactive books that read along.", color: "#6FDFFF", bg: "#E0F7FA" },
                                { icon: Music, title: "Music & Art", desc: "Draw, paint, and make your own songs!", color: "#FFD93D", bg: "#FFFDE7" },
                                { icon: Puzzle, title: "Brain Puzzles", desc: "Tricky puzzles to boost problem solving.", color: "#7ED957", bg: "#F1F8E9" },
                                { icon: Star, title: "Rewards", desc: "Earn stars and badges for every achievement.", color: "#B388FF", bg: "#F3E5F5" },
                                { icon: Heart, title: "Safe Space", desc: "100% Ad-free and safe for all ages.", color: "#FF8A65", bg: "#FBE9E7" }
                            ].map((f, i) => (
                                <div key={i} className="group p-8 rounded-[2.5rem] bg-white border-4 border-b-8 border-transparent hover:border-[#4A3B69] transition-all duration-200 transform hover:-translate-y-2">
                                    <div className={`w-20 h-20 mx-auto ${f.bg} rounded-full border-4 border-[${f.color}] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`} style={{ borderColor: f.color }}>
                                        <f.icon size={36} strokeWidth={2.5} color={f.color} />
                                    </div>
                                    <h4 className="text-2xl font-black text-[#4A3B69] mb-3 text-center">{f.title}</h4>
                                    <p className="text-[#6B5B8A] font-comic font-bold text-lg text-center leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Plans */}
                <section className="py-20 px-6 bg-[#6FDFFF] relative overflow-hidden">
                    {/* Background Waves */}
                    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFF4F0"></path>
                        </svg>
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10 pt-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-md">Pick Your Plan! 🎁</h2>
                            <p className="text-xl text-white font-bold font-comic opacity-90">Unlock the full magical experience today.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 items-end">
                            {[
                                { name: "Fun", price: "9", desc: "Great for playing!", features: ["50 Games", "3 Profiles", "No Ads"], color: "#FFD93D", secondary: "#F9A825" },
                                { name: "Super", price: "19", desc: "Best for learning!", features: ["All Games & Books", "Offline Mode", "Weekly Reports", "Free Stickers"], highlight: true, color: "#FF6B9D", secondary: "#C2185B" },
                                { name: "Mega", price: "29", desc: "The ultimate pack!", features: ["Everything Unlocked", "5 Profiles", "Early Access", "Gift Box"], color: "#B388FF", secondary: "#7C4DFF" }
                            ].map((plan, i) => (
                                <div key={i} className={`relative p-8 rounded-[2.5rem] bg-white border-4 border-[#4A3B69] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-transform duration-300 ${plan.highlight ? 'scale-110 z-10 -rotate-1' : 'hover:scale-105'}`}>
                                    {plan.highlight && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#FFD93D] text-[#4A3B69] text-sm font-black uppercase tracking-wider rounded-full border-4 border-[#4A3B69] shadow-sm transform rotate-3">
                                            Most Loved! ❤️
                                        </div>
                                    )}
                                    <div className="mb-6 text-center">
                                        <h3 className="text-3xl font-black mb-2 text-[#4A3B69]">{plan.name}</h3>
                                        <div className="flex items-center justify-center mb-2">
                                            <span className="text-2xl font-black text-[#4A3B69] opacity-50 mr-1">$</span>
                                            <span className="text-6xl font-black text-[#4A3B69]">{plan.price}</span>
                                            <span className="text-xl font-bold text-[#4A3B69] opacity-50 ml-1">/mo</span>
                                        </div>
                                        <p className="text-[#6B5B8A] font-comic font-bold">{plan.desc}</p>
                                    </div>

                                    <div className="bg-[#F5F3FF] rounded-2xl p-6 mb-8 border-2 border-dashed border-[#4A3B69]/20">
                                        <ul className="space-y-3">
                                            {plan.features.map((f, j) => (
                                                <li key={j} className="flex items-center gap-3 text-lg font-bold text-[#4A3B69]">
                                                    <div className="w-6 h-6 rounded-full bg-[#7ED957] border-2 border-[#4A3B69] flex items-center justify-center text-[#4A3B69]">
                                                        <Check size={14} strokeWidth={4} />
                                                    </div>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="w-full py-4 rounded-2xl text-white font-black text-xl border-b-8 active:border-b-0 active:translate-y-2 transition-all shadow-xl uppercase tracking-wide flex items-center justify-center gap-2"
                                        style={{ backgroundColor: plan.color, borderColor: plan.secondary }}>
                                        Choose {plan.name}! <ArrowRight size={24} strokeWidth={3} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-center text-4xl font-black text-[#4A3B69] mb-12">Parents Ask 🤔</h2>
                        <div className="space-y-4">
                            {[
                                { q: "Is this app safe for my 4 year old?", a: "Yes! FunZone is COPPA compliant, 100% ad-free, and designed specifically for preschool safety." },
                                { q: "Can I use it offline?", a: "Absolutely. Once downloaded, all games and books work without internet - perfect for road trips!" },
                                { q: "How do I cancel?", a: "Cancel anytime with one tap in the Parents Zone. No hidden tricks, we promise!" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-3xl border-4 border-[#E0E0E0] overflow-hidden hover:border-[#4A3B69] transition-colors">
                                    <button
                                        className="w-full p-6 text-left flex items-center justify-between"
                                        onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                    >
                                        <span className="text-xl font-bold text-[#4A3B69] font-kids">{item.q}</span>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${expandedFaq === i ? 'bg-[#FF6B9D] rotate-180' : 'bg-[#E0E0E0]'}`}>
                                            <ChevronDown size={24} color="white" strokeWidth={3} />
                                        </div>
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="px-6 pb-6 text-lg font-comic text-[#6B5B8A] font-bold">
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-[#4A3B69] pt-20 pb-10 px-6 text-white text-center border-t-8 border-[#FF6B9D]">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <Star size={40} fill="#FFD93D" stroke="#FFD93D" className="animate-spin-slow" />
                            <span className="text-4xl font-black tracking-tight font-kids">Fun<span className="text-[#FF6B9D]">Zone</span>!</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            {['About Us', 'Safety', 'Curriculum', 'Help & Support', 'Privacy Policy'].map(link => (
                                <a key={link} href="#" className="text-lg font-bold hover:text-[#FFD93D] transition-colors bg-[#5D4B85] px-4 py-2 rounded-xl">{link}</a>
                            ))}
                        </div>

                        <div className="flex justify-center gap-4 mb-12">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#FFD93D] transition-colors cursor-pointer text-[#4A3B69]">
                                    <Smile size={24} strokeWidth={2.5} />
                                </div>
                            ))}
                        </div>

                        <p className="text-[#9E8BBF] font-comic font-bold">
                            Made with ❤️ and 🍪 by the Kids Playful Team. <br />
                            © 2025 FunZone Inc. All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
};
