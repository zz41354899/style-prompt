import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Leaf, TreePine, Recycle, Sun, Cloud, Droplets, Wind, Sprout, Heart } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S84EcoGreenPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-[#F7FDF9] text-[#1D3B24] font-sans selection:bg-[#4ADE80] selection:text-[#064E3B]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
                
                .font-eco { font-family: 'Outfit', sans-serif; }
                
                .leaf-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
                
                .organic-shape {
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }
                
                .float {
                    animation: float 6s ease-in-out infinite;
                }
                
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
            `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 leaf-pattern opacity-50 pointer-events-none z-0"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#F7FDF9]/80 backdrop-blur-md border-b border-[#22C55E]/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#22C55E] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#22C55E]/20">
                            <Leaf size={20} fill="currentColor" />
                        </div>
                        <span className="text-xl font-extrabold text-[#1D3B24] tracking-tight font-eco">Eco<span className="text-[#22C55E]">Life</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Our Mission', 'Solutions', 'Impact', 'Community'].map((item) => (
                                <a key={item} href="#" className="text-sm font-semibold text-[#4A6B56] hover:text-[#22C55E] transition-colors font-eco">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2.5 bg-[#1D3B24] hover:bg-[#284E30] text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-[#1D3B24]/20 hover:shadow-[#1D3B24]/30 font-eco">
                                Join Movement
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#1D3B24] hover:bg-[#22C55E]/10 rounded-xl transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-20 left-0 w-full bg-[#F7FDF9] border-b border-[#22C55E]/10 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200 font-eco">
                        {['Our Mission', 'Solutions', 'Impact', 'Community'].map((item) => (
                            <a key={item} href="#" className="text-lg font-bold text-[#1D3B24] py-2 border-b border-[#22C55E]/10">
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-4 py-3 bg-[#22C55E] text-white font-bold rounded-full shadow-lg shadow-[#22C55E]/20">
                            Join Movement
                        </button>
                    </div>
                )}
            </header>

            <main className="font-eco relative z-10">
                {/* Hero Section */}
                <section className="pt-24 pb-32 px-6 overflow-hidden">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ECFCCB] text-[#4D7C0F] text-sm font-bold mb-8 animate-fade-in-up">
                                <Sun size={18} className="animate-spin-slow" />
                                <span>Powered by 100% Renewable Energy</span>
                            </div>

                            <h1 className="text-6xl lg:text-8xl font-extrabold text-[#1D3B24] leading-[0.9] mb-8 tracking-tight">
                                Plant <br />
                                the <span className="text-[#22C55E]">Future.</span>
                            </h1>

                            <p className="text-xl text-[#4A6B56] mb-10 leading-relaxed max-w-lg font-medium">
                                Join the global initiative to restore our planet. Sustainable solutions for modern living, reforestation, and carbon neutrality.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                <button className="px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-full shadow-xl shadow-[#22C55E]/20 hover:shadow-[#22C55E]/30 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                                    Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-white hover:bg-[#F0FDF4] text-[#1D3B24] font-bold rounded-full border border-[#22C55E]/20 shadow-sm transition-all flex items-center justify-center gap-2">
                                    <Recycle size={18} /> View Impact Report
                                </button>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#F7FDF9] overflow-hidden bg-[#22C55E]/20">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Eco${i}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-[#1D3B24]">
                                    <span className="text-[#22C55E]">50k+</span> Eco-Warriors <br /> Joined this month
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BBF7D0] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#86EFAC] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                            <div className="relative z-10 float">
                                <div className="aspect-square bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-[#22C55E]/10 border border-[#22C55E]/20 overflow-hidden">
                                    <div className="h-full bg-[#ECFCCB] rounded-[2rem] overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" alt="Nature" className="w-full h-full object-cover mix-blend-overlay opacity-80" />

                                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#1D3B24]/80 to-transparent pt-32 text-white">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <TreePine size={20} className="text-[#4ADE80]" />
                                                    <span className="font-bold uppercase tracking-wider text-sm">Reforestation</span>
                                                </div>
                                                <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold">Live</div>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-2">Amazonia Project</h3>
                                            <div className="w-full h-2 bg-white/20 rounded-full mb-2 overflow-hidden">
                                                <div className="h-full w-[75%] bg-[#4ADE80] rounded-full"></div>
                                            </div>
                                            <div className="flex justify-between text-sm font-medium opacity-90">
                                                <span>75,000 Trees Planted</span>
                                                <span>Goal: 100k</span>
                                            </div>
                                        </div>

                                        <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 text-center">
                                            <div className="text-xs text-[#4A6B56] font-bold uppercase mb-1">CO2 Offset</div>
                                            <div className="text-3xl font-extrabold text-[#1D3B24]">1.2t</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 px-6 relative bg-white rounded-[4rem] my-12 mx-4 shadow-xl shadow-[#22C55E]/5 border border-[#22C55E]/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-[#22C55E] font-bold uppercase tracking-wider text-sm mb-4">Our Approach</h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-[#1D3B24] mb-6">Restoring balance to <br /> our ecosystem.</h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: TreePine, title: "Reforestation", desc: "Planting native trees in degraded areas to restore biodiversity and sequester carbon.", color: "text-emerald-600", bg: "bg-emerald-50" },
                                { icon: Wind, title: "Clean Energy", desc: "Investing in solar and wind projects to accelerate the transition to renewable power.", color: "text-sky-600", bg: "bg-sky-50" },
                                { icon: Droplets, title: "Ocean Cleanup", desc: "Removing plastic waste from our oceans and waterways to protect marine life.", color: "text-blue-600", bg: "bg-blue-50" },
                                { icon: Recycle, title: "Circular Economy", desc: "Promoting zero-waste manufacturing and sustainable product lifecycles.", color: "text-orange-600", bg: "bg-orange-50" },
                                { icon: Sprout, title: "Regenerative Ag", desc: "Supporting farming practices that restore soil health and trap carbon underground.", color: "text-lime-600", bg: "bg-lime-50" },
                                { icon: Cloud, title: "Air Quality", desc: "Monitoring and improving air quality in urban centers through green infrastructure.", color: "text-indigo-600", bg: "bg-indigo-50" }
                            ].map((f, i) => (
                                <div key={i} className="group p-8 rounded-[2rem] bg-[#F7FDF9] border border-transparent hover:border-[#22C55E]/20 hover:shadow-xl hover:shadow-[#22C55E]/5 transition-all duration-300">
                                    <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <f.icon size={26} strokeWidth={2.5} className={f.color} />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#1D3B24] mb-3">{f.title}</h4>
                                    <p className="text-[#4A6B56] leading-relaxed font-medium">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Stat */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto bg-[#1D3B24] rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 leaf-pattern"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Small actions, <br /> <span className="text-[#4ADE80]">massive impact.</span></h2>
                                <p className="text-[#86EFAC] text-xl font-medium mb-10 max-w-md">Every subscription contributes directly to verified environmental projects worldwide. Track your impact in real-time.</p>
                                <button className="px-10 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-full transition-colors shadow-lg">View Projects</button>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { val: '2.5M', label: 'Trees Planted', icon: TreePine },
                                    { val: '150k', label: 'Tons CO2 Removed', icon: Cloud },
                                    { val: '500+', label: 'Green Jobs Created', icon: Sun },
                                    { val: '45', label: 'Countries Active', icon: Leaf }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                                        <stat.icon className="text-[#4ADE80] mb-4" size={28} />
                                        <div className="text-3xl font-extrabold mb-1">{stat.val}</div>
                                        <div className="text-sm font-bold text-[#86EFAC] uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Plans */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-[#1D3B24] mb-4">Choose Your Contribution</h2>
                            <p className="text-lg text-[#4A6B56] font-medium">Monthly memberships that fit your lifestyle and budget.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 items-start">
                            {[
                                { name: "Seedling", price: "5", desc: "Offset your personal carbon footprint.", features: ["Offset 1 ton CO2/mo", "Plant 2 trees/mo", "Digital Certificate", "Quarterly Report"], color: "bg-[#ECFCCB] text-[#365314]", btn: "bg-[#1D3B24]" },
                                { name: "Sapling", price: "15", desc: "Become carbon negative and support biodiversity.", features: ["Offset 3 tons CO2/mo", "Plant 8 trees/mo", "Plastic Recycling", "Premium Swag Pack"], highlight: true, color: "bg-[#22C55E] text-white", btn: "bg-white text-[#16A34A]" },
                                { name: "Forest", price: "29", desc: "Maximum impact for dedicated eco-warriors.", features: ["Offset 6 tons CO2/mo", "Plant 20 trees/mo", "Project Visits", "Board Voting Rights"], color: "bg-[#D1FAE5] text-[#064E3B]", btn: "bg-[#1D3B24]" }
                            ].map((plan, i) => (
                                <div key={i} className={`relative p-8 rounded-[2.5rem] transition-all duration-300 ${plan.highlight ? 'bg-[#22C55E] text-white shadow-2xl shadow-[#22C55E]/30 scale-105 z-10' : 'bg-white border-2 border-[#ECFCCB] hover:border-[#22C55E]/30 hover:shadow-xl hover:shadow-[#22C55E]/5'}`}>
                                    {plan.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1D3B24] text-[#4ADE80] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="mb-8 text-center border-b border-current/10 pb-8">
                                        <h3 className={`text-xl font-extrabold mb-2 ${plan.highlight ? 'text-white' : 'text-[#1D3B24]'}`}>{plan.name}</h3>
                                        <div className="flex items-baseline justify-center gap-0.5 mb-2">
                                            <span className="text-sm font-bold opacity-70">$</span>
                                            <span className={`text-5xl font-extrabold ${plan.highlight ? 'text-white' : 'text-[#1D3B24]'}`}>{plan.price}</span>
                                            <span className="text-sm font-bold opacity-70">/mo</span>
                                        </div>
                                        <p className={`text-sm font-medium ${plan.highlight ? 'text-white/80' : 'text-[#4A6B56]'}`}>{plan.desc}</p>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm font-bold">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white/20 text-white' : 'bg-[#ECFCCB] text-[#4D7C0F]'}`}>
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                <span className={plan.highlight ? 'text-white' : 'text-[#1D3B24]'}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-white text-[#16A34A] hover:bg-[#F0FDF4]' : 'bg-[#1D3B24] text-white hover:bg-[#14532D]'}`}>
                                        Choose {plan.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-[#1D3B24] pt-24 pb-12 px-6 text-white rounded-t-[3rem] mt-20">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                        <div>
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                                <div className="w-10 h-10 bg-[#22C55E] rounded-xl flex items-center justify-center text-white">
                                    <Leaf size={20} fill="currentColor" />
                                </div>
                                <span className="text-2xl font-extrabold text-white font-eco">Eco<span className="text-[#4ADE80]">Life</span></span>
                            </div>
                            <p className="text-[#86EFAC] text-sm font-medium max-w-xs leading-relaxed">Building a sustainable future, one action at a time. Join us in making the planet green again.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-12 text-sm font-bold text-[#F0FDF4]">
                            <div className="flex flex-col gap-4">
                                <span className="text-[#22C55E] uppercase tracking-wider text-xs">Platform</span>
                                <a href="#" className="hover:text-white transition-colors">Our Mission</a>
                                <a href="#" className="hover:text-white transition-colors">Projects</a>
                                <a href="#" className="hover:text-white transition-colors">Transparency</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-[#22C55E] uppercase tracking-wider text-xs">Community</span>
                                <a href="#" className="hover:text-white transition-colors">Blog</a>
                                <a href="#" className="hover:text-white transition-colors">Events</a>
                                <a href="#" className="hover:text-white transition-colors">Partners</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-[#22C55E] uppercase tracking-wider text-xs">Legal</span>
                                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms</a>
                                <a href="#" className="hover:text-white transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-[#4A6B56] text-sm font-medium">
                        © 2025 EcoLife Inc. Designed with <Heart size={12} className="inline mx-1 text-[#22C55E]" fill="currentColor" /> for Earth.
                    </div>
                </footer>
            </main>
        </div>
    );
};
