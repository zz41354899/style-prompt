import { useState } from 'react';
import { Heart, Activity, Calendar, Menu, X, ArrowRight, UserPlus } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S83HealthMedical = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F5FCFB] font-sans text-[#37474F] overflow-x-hidden selection:bg-[#00BFA5] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
        .font-med { font-family: 'Lato', sans-serif; }
        
        .soft-shadow {
           box-shadow: 0 4px 20px rgba(0, 191, 165, 0.08);
        }
        
        .btn-soft {
           border-radius: 16px; 
           transition: all 0.3s ease;
        }
        .btn-soft:hover {
           transform: translateY(-2px);
           box-shadow: 0 4px 12px rgba(0, 191, 165, 0.2);
        }
        
        .wave-bg {
           background: linear-gradient(180deg, #FFFFFF 0%, #F5FCFB 100%);
           border-bottom-left-radius: 50% 20px;
           border-bottom-right-radius: 50% 20px;
        }
      `}</style>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#00BFA5] rounded-xl flex items-center justify-center text-white shadow-md">
                            <Activity size={24} />
                        </div>
                        <span className="font-med font-black text-2xl text-[#009688] tracking-tight">MediCare</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Services', 'Doctors', 'Insurance', 'About'].map((item) => (
                            <a key={item} href="#" className="font-med text-[#78909C] hover:text-[#00BFA5] font-bold transition-colors text-sm">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={`text-[#00BFA5] font-bold text-sm cursor-pointer hover:underline ${responsive.nav.showDesktop ? 'block' : 'hidden'}`}>Patient Portal</span>
                        <button className="bg-[#FF8A80] text-white px-6 py-2.5 btn-soft text-sm font-bold flex items-center gap-2 hover:bg-[#FF5252]">
                            <Calendar size={16} /> Book Visit
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#37474F]" /> : <Menu size={24} className="text-[#37474F]" />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Services
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Doctors
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Insurance
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {menuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Services
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Doctors
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Insurance
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {menuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Services
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Doctors
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Insurance
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 wave-bg relative">
                <div className={`max-w-6xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center`}>

                    <div className={`${isMobile ? 'order-2' : 'md:order-1'}`}>
                        <div className="inline-block px-4 py-1 bg-[#E0F2F1] text-[#00897B] rounded-full text-xs font-bold mb-6">
                            Trusted by 10,000+ Families
                        </div>

                        <h1 className={`${isMobile ? 'text-5xl' : 'text-5xl lg:text-6xl'} font-med font-light text-[#263238] mb-6 leading-tight`}>
                            Healthcare made <br />
                            <span className="font-black text-[#00BFA5]">human again.</span>
                        </h1>

                        <p className="font-med text-lg text-[#546E7A] mb-10 max-w-md leading-relaxed">
                            Experience compassionate care with modern technology. Same-day appointments, telehealth options, and personalized plans.
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-[#00BFA5] text-white px-8 py-3 btn-soft font-bold text-lg shadow-lg shadow-[#00BFA5]/20 flex items-center gap-2">
                                Find a Doctor <ArrowRight size={20} />
                            </button>
                            <button className="px-8 py-3 bg-white text-[#546E7A] btn-soft border border-[#CFD8DC] font-bold hover:bg-[#FAFAFA]">
                                Our Locations
                            </button>
                        </div>
                    </div>

                    {/* Illustration Area */}
                    <div className={`${isMobile ? 'order-1' : 'md:order-2'} relative h-[400px] flex items-center justify-center`}>
                        <div className="absolute w-[350px] h-[350px] bg-[#B2DFDB] rounded-full opacity-30 animate-pulse" />
                        <div className="absolute w-[300px] h-[300px] bg-[#80CBC4] rounded-full opacity-30 animation-delay-500 animate-pulse" />

                        {/* Doctor Card */}
                        <div className="relative bg-white p-6 rounded-3xl soft-shadow w-64 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#ECEFF1] rounded-full" />
                                <div>
                                    <div className="font-bold text-[#37474F]">Dr. Sarah Smith</div>
                                    <div className="text-xs text-[#90A4AE]">Cardiologist</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center bg-[#E0F2F1] p-3 rounded-xl mb-2">
                                <div className="text-xs font-bold text-[#00796B]">Next Available</div>
                                <div className="text-xs font-bold text-[#004D40]">Today, 2:00 PM</div>
                            </div>
                            <div className="flex gap-1 justify-center mt-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-[#B2DFDB]" />)}
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl soft-shadow flex items-center gap-3 animate-bounce shadow-lg">
                            <div className="w-10 h-10 bg-[#FFEBEE] rounded-full flex items-center justify-center text-[#FF5252]">
                                <Heart size={20} fill="#FF5252" />
                            </div>
                            <div>
                                <div className="text-xs text-[#90A4AE] font-bold">Patient Satisfaction</div>
                                <div className="font-black text-[#263238]">99.8%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Cards */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-med font-bold text-[#37474F]">Comprehensive Care</h2>
                        <div className="w-16 h-1 bg-[#00BFA5] mx-auto mt-4 rounded-full" />
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                        {[
                            { icon: UserPlus, title: 'Checkups', color: '#00BFA5' },
                            { icon: Activity, title: 'Diagnostics', color: '#29B6F6' },
                            { icon: Heart, title: 'Specialists', color: '#FF8A80' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[24px] border border-[#ECEFF1] hover:border-[#B2DFDB] hover:shadow-lg transition-all cursor-pointer group text-center">
                                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#37474F] mb-3">{item.title}</h3>
                                <p className="text-[#78909C] text-sm leading-relaxed">
                                    Top-tier medical professionals dedicated to providing you with specific care tailored to your needs.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-[#ECEFF1] py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
                        <Activity size={20} />
                        <span className="font-med font-bold text-lg">MediCare</span>
                    </div>

                    <div className="flex justify-center gap-8 text-[#90A4AE] text-sm font-bold mb-8">
                        <a href="#" className="hover:text-[#00BFA5]">Privacy Policy</a>
                        <a href="#" className="hover:text-[#00BFA5]">Terms of Service</a>
                        <a href="#" className="hover:text-[#00BFA5]">Accessibility</a>
                        <a href="#" className="hover:text-[#00BFA5]">Contact</a>
                    </div>

                    <p className="text-[#CFD8DC] text-xs">
                        © 2024 MediCare Health Group. All rights reserved. <br />
                        In case of emergency, please dial 911 immediately.
                    </p>
                </div>
            </footer>
        </div>
    );
};
