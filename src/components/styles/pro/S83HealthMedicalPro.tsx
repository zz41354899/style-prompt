import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Heart, Activity, Stethoscope, ShieldCheck, Calendar, User, Phone, Pill, Thermometer, Clock } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S83HealthMedicalPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');
                .font-medical { font-family: 'Nunito Sans', sans-serif; }
                
                .bg-pattern {
                    background-image: radial-gradient(#14B8A6 0.5px, transparent 0.5px);
                    background-size: 24px 24px;
                }
                
                .soft-shadow {
                    box-shadow: 0 10px 40px -10px rgba(20, 184, 166, 0.15);
                }
                
                .pulse-ring {
                    position: absolute;
                    border-radius: 50%;
                    animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
                }
                
                @keyframes pulse-ring {
                    0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4); }
                    70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(20, 184, 166, 0); }
                    100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(20, 184, 166, 0); }
                }
            `}</style>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="relative w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                            <Heart size={22} fill="currentColor" className="text-teal-600" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border-2 border-white"></span>
                        </div>
                        <span className="text-xl font-extrabold text-slate-800 tracking-tight font-medical">Med<span className="text-teal-500">Care</span>+</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Departments', 'Doctors', 'Patients', 'Insurance'].map((item) => (
                                <a key={item} href="#" className="text-sm font-bold text-slate-500 hover:text-teal-600 transition-colors font-medical uppercase tracking-wide">
                                    {item}
                                </a>
                            ))}
                            <div className="flex items-center gap-4 pl-4 border-l border-slate-100">
                                <div className="flex flex-col text-right">
                                    <span className="text-xs font-bold text-slate-400 uppercase">Emergency</span>
                                    <span className="text-lg font-extrabold text-red-400 leading-none font-medical tracking-tight">911-000</span>
                                </div>
                                <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 flex items-center gap-2">
                                    <Calendar size={16} /> Book Visit
                                </button>
                            </div>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
                        {['Departments', 'Doctors', 'Patients', 'Insurance'].map((item) => (
                            <a key={item} href="#" className="text-lg font-bold text-slate-700 py-2 border-b border-slate-50 font-medical">
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-4 py-4 bg-teal-500 text-white font-bold rounded-full shadow-lg shadow-teal-500/20">
                            Book Appointment
                        </button>
                    </div>
                )}
            </header>

            <main className="font-medical">
                {/* Hero Section */}
                <section className="relative pt-20 pb-32 px-6 overflow-hidden bg-slate-50">
                    <div className="absolute inset-0 bg-pattern opacity-[0.4] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-100 text-teal-700 text-sm font-bold mb-8 shadow-sm">
                                <Activity size={16} className="text-teal-500" />
                                <span>Vote #1 Healthcare Provider 2025</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Healthcare that <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">really cares.</span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                                Experience a new standard of medical excellence. Personalized care, advanced technology, and a dedicated team focused on your well-being.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-xl shadow-teal-500/20 hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2 group">
                                    Find a Doctor <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-white hover:bg-white/80 text-slate-700 font-bold rounded-full border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2">
                                    <Phone size={18} className="text-slate-400" /> Emergency
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-8">
                                {[
                                    { label: 'Specialists', val: '250+' },
                                    { label: 'Satisfaction', val: '99%' },
                                    { label: 'Experience', val: '20y+' }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.val}</div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-white rounded-[2rem] p-8 shadow-2xl shadow-teal-900/5 border border-slate-100">
                                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-3 animate-bounce duration-[3000ms]">
                                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                                        <Heart size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase">Heart Rate</div>
                                        <div className="text-lg font-extrabold text-slate-900">72 bpm</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 mb-8">
                                    <div className="w-20 h-20 bg-teal-100 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="Doctor" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Dr. Sarah Johnson</h3>
                                        <p className="text-teal-600 font-semibold mb-2">Senior Cardiologist</p>
                                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                                            <Clock size={14} /> Available Today, 2:00 PM
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600">
                                                <Calendar size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900">Next Appointment</div>
                                                <div className="text-xs font-semibold text-slate-500">Oct 24, 09:30 AM</div>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold">Confirmed</div>
                                    </div>

                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-500">
                                                <Pill size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900">Prescriptions</div>
                                                <div className="text-xs font-semibold text-slate-500">2 Active Refills</div>
                                            </div>
                                        </div>
                                        <button className="text-teal-600 text-xs font-bold hover:underline">View All</button>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                                    <button className="py-3 bg-teal-50 hover:bg-teal-100 text-teal-700 font-bold rounded-xl transition-colors">Video Call</button>
                                    <button className="py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 px-6 bg-white relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-teal-500 font-bold uppercase tracking-wider text-sm mb-4">Our Departments</h2>
                            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Comprehensive care for <br />you and your family.</h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Heart, title: "Cardiology", desc: "Advanced heart care, diagnostics, and surgery from world-class specialists." },
                                { icon: User, title: "Pediatrics", desc: "Compassionate care for infants, children, and adolescents." },
                                { icon: Activity, title: "Neurology", desc: "Expert diagnosis and treatment for disorders of the nervous system." },
                                { icon: Thermometer, title: "General Medicine", desc: "Primary care services for everyday health needs and prevention." },
                                { icon: ShieldCheck, title: "Preventive Care", desc: "Vaccinations, screenings, and check-ups to keep you healthy." },
                                { icon: Stethoscope, title: "Diagnostics", desc: "State-of-the-art imaging and laboratory services for accurate results." }
                            ].map((s, i) => (
                                <div key={i} className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300 group-hover:bg-teal-500 group-hover:text-white">
                                        <s.icon size={26} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{s.title}</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                                    <div className="mt-6 flex items-center text-teal-500 text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                        Learn More <ArrowRight size={16} className="ml-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Plans */}
                <section className="py-24 px-6 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Health Packages</h2>
                            <p className="text-lg text-slate-600 font-medium">Affordable plans for continuous care and peace of mind.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 items-start">
                            {[
                                { name: "Basic Checkup", price: "99", desc: "Annual essentials", features: ["Consultation", "Basic Lab Tests", "BP Check"] },
                                { name: "Total Health", price: "249", desc: "Comprehensive care", features: ["Advanced Labs", "Cardiac Screening", "Diet Plan", "2 Follow-ups"], highlight: true },
                                { name: "Family Shield", price: "499", desc: "For the whole family", features: ["Covers 4 Members", "Home Collection", "Priority Support", "Unlimited Teleconsult"] }
                            ].map((plan, i) => (
                                <div key={i} className={`relative p-8 rounded-[2rem] transition-all duration-300 ${plan.highlight ? 'bg-white shadow-2xl shadow-teal-900/10 border-2 border-teal-500 scale-105 z-10' : 'bg-white border border-slate-200 hover:border-teal-200'}`}>
                                    {plan.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-teal-500/30">
                                            Best Value
                                        </div>
                                    )}
                                    <div className="mb-8 text-center border-b border-slate-50 pb-8">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline justify-center gap-1 mb-2">
                                            <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                                            <span className="text-slate-500 font-bold">/yr</span>
                                        </div>
                                        <p className="text-slate-400 text-sm font-medium">{plan.desc}</p>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-400'}`}>
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/20' : 'bg-slate-50 hover:bg-slate-100 text-slate-900'}`}>
                                        Select Package
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-6 bg-white relative overflow-hidden">
                    {/* Decorative background circle */}
                    <div className="absolute -left-20 top-20 w-64 h-64 bg-teal-50 rounded-full opacity-50 blur-3xl"></div>

                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">Patient Information</h2>
                        <div className="space-y-4">
                            {[
                                { q: "How do I book an appointment?", a: "You can book directly through our website, mobile app, or by calling our 24/7 helpline." },
                                { q: "Do you accept insurance?", a: "Yes, we partner with all major insurance providers. Please check our insurance page for a full list." },
                                { q: "What should I bring to my visit?", a: "Please bring a valid ID, your insurance card, and any medical records or prescriptions you are currently taking." }
                            ].map((faq, i) => (
                                <div key={i} className="border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white transition-colors duration-300">
                                    <button
                                        className="w-full p-6 text-left flex items-center justify-between group"
                                        onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                    >
                                        <span className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{faq.q}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${expandedFaq === i ? 'bg-teal-500 text-white rotate-180' : 'bg-white text-slate-400 shadow-sm'}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6">
                    <div className="max-w-5xl mx-auto bg-teal-500 rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-teal-500/30">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 animate-bounce duration-[2000ms]">
                                <Stethoscope size={32} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Your health comes first. <br /> Don't delay care.</h2>
                            <p className="text-teal-100 text-xl font-medium mb-10 max-w-2xl mx-auto">Join thousands of patients who trust MedCare+ for their medical needs.</p>
                            <button className="px-10 py-4 bg-white text-teal-600 font-extrabold text-lg rounded-full hover:bg-teal-50 transition-colors shadow-lg">
                                Schedule a Visit
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white pt-20 pb-10 px-6 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                        <div>
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                                    <Heart size={18} fill="currentColor" />
                                </div>
                                <span className="text-xl font-extrabold text-slate-900 font-medical">Med<span className="text-teal-500">Care</span>+</span>
                            </div>
                            <p className="text-slate-400 text-sm font-bold max-w-xs">Compassionate care, advanced medicine, close to home.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-600">
                            <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-teal-600 transition-colors">Patient Rights</a>
                            <a href="#" className="hover:text-teal-600 transition-colors">Careers</a>
                        </div>

                        <div className="text-slate-400 text-sm font-bold">
                            © 2025 MedCare+ Health System.
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
