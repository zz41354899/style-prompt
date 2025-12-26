import { useState } from 'react';
import { CreditCard, TrendingUp, Shield, Menu, X, ArrowUpRight, Lock } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S82FintechTrust = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#FAFBFC] font-sans text-[#24292E] overflow-x-hidden selection:bg-[#5A3EA8] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        .font-fin { font-family: 'DM Sans', sans-serif; }
        
        .card-shadow {
           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        .gradient-text {
           background: linear-gradient(135deg, #5A3EA8 0%, #2A7BDE 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }
        
        .feature-icon {
           background: linear-gradient(135deg, rgba(90, 62, 168, 0.1) 0%, rgba(42, 123, 222, 0.1) 100%);
        }
      `}</style>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#5A3EA8] p-1.5 rounded-lg">
                            <Shield size={20} className="text-white" />
                        </div>
                        <span className="font-fin font-bold text-xl tracking-tight text-[#0A192F]">Vault</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Features', 'Cards', 'Invest', 'Security'].map((item) => (
                            <a key={item} href="#" className="font-fin text-[#536171] hover:text-[#5A3EA8] font-medium transition-colors text-sm">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={`text-[#536171] font-medium text-sm cursor-pointer hover:text-[#0A192F] ${responsive.nav.showDesktop ? 'block' : 'hidden'}`}>Log in</span>
                        <button className="bg-[#0A192F] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#5A3EA8] transition-colors shadow-lg shadow-[#5A3EA8]/20">
                            Open Account
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#0A192F]" /> : <Menu size={24} className="text-[#0A192F]" />}
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
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Cards
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Invest
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Security
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-20 items-center`}>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5FAEB] text-[#00C08B] font-bold text-xs mb-8">
                            <Lock size={14} /> Bank-grade Security
                        </div>

                        <h1 className="text-6xl font-fin font-bold text-[#0A192F] mb-6 leading-[1.15]">
                            The future of <br />
                            <span className="gradient-text">secure banking.</span>
                        </h1>

                        <p className="font-fin text-xl text-[#536171] mb-10 max-w-lg leading-relaxed">
                            Manage your finances with confidence. Zero hidden fees, 3.5% APY, and automated investing tools built for long-term growth.
                        </p>

                        <div className={`flex flex-col ${isMobile ? '' : 'sm:flex-row'} gap-4`}>
                            <button className="bg-[#5A3EA8] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#49318C] transition-colors shadow-xl shadow-[#5A3EA8]/30 flex items-center justify-center gap-2">
                                Get Started <ArrowUpRight size={18} />
                            </button>
                            <button className="bg-white border border-gray-200 text-[#0A192F] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                                View Rates
                            </button>
                        </div>

                        <div className="mt-8 flex items-center gap-8 text-sm text-[#8492A6]">
                            <span>Trusted by 500k+ users</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>FDIC Insured</span>
                        </div>
                    </div>

                    {/* App Mockup */}
                    <div className="relative">
                        {/* Background Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#E6E1FF] to-[#E3FAFF] rounded-full blur-3xl opacity-50 -z-10" />

                        {/* Card Component */}
                        <div className="bg-white rounded-3xl p-8 card-shadow max-w-sm mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border border-white">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-12 h-8 bg-[#E6E1FF] rounded-md relative overflow-hidden">
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#5A3EA8] opacity-20"></div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Current Balance</div>
                                    <div className="text-3xl font-bold text-[#0A192F] font-fin">$24,093.52</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-[#F8F9FA] p-4 rounded-xl text-center hover:bg-[#E5FAEB] cursor-pointer transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto mb-2 shadow-sm text-[#00C08B]">
                                        <TrendingUp size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 group-hover:text-[#00C08B]">Invest</span>
                                </div>
                                <div className="bg-[#F8F9FA] p-4 rounded-xl text-center hover:bg-[#E6E1FF] cursor-pointer transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto mb-2 shadow-sm text-[#5A3EA8]">
                                        <CreditCard size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 group-hover:text-[#5A3EA8]">Cards</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-100" />
                                            <div className="h-2 w-24 bg-gray-100 rounded-full" />
                                        </div>
                                        <div className="h-2 w-12 bg-gray-100 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Success Badge */}
                        <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce delay-1000">
                            <div className="w-8 h-8 rounded-full bg-[#E5FAEB] flex items-center justify-center text-[#00C08B]">
                                <ArrowUpRight size={16} />
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase">Interest Earned</div>
                                <div className="font-bold text-[#00C08B]">+$124.50</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className={`max-w-6xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-12`}>
                    {[
                        { title: 'Zero Fees', desc: 'No overdraft fees, no maintenance fees, no foreign transaction fees.' },
                        { title: 'Instant Alerts', desc: 'Get notified the second you spend. Stay on top of your budget.' },
                        { title: 'Safe & Secure', desc: 'Lock your card instantly in the app if it goes missing or suspicious activity occurs.' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl feature-icon flex items-center justify-center text-[#5A3EA8] mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0A192F] mb-3">{item.title}</h3>
                            <p className="text-[#536171] leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 text-center text-[#8492A6] text-sm">
                <div className="max-w-4xl mx-auto border-t border-gray-200 pt-12">
                    <div className="flex justify-center gap-8 mb-6 font-bold text-[#0A192F]">
                        <a href="#">Security</a>
                        <a href="#">Licenses</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                    </div>
                    <p>&copy; 2024 Vault Financial Inc. Banking services provided by Partner Bank, Member FDIC.</p>
                </div>
            </footer>
        </div>
    );
};
