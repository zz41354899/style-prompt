import { useState } from 'react';
import { Database, ShieldCheck, Server, Cloud, Zap, Users, BarChart3, Lock, Menu, X, ArrowRight, Check, Globe } from 'lucide-react';

export const S81EnterpriseBlue = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F0F2F5] font-sans text-[#1C1E21] selection:bg-[#003366] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
                .font-ent { font-family: 'Roboto', sans-serif; }
            `}</style>

            {/* Navigation */}
            <nav className="bg-[#003366] text-white sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Database size={24} className="text-[#4FC3F7]" />
                        <span className="font-ent font-bold text-lg uppercase tracking-wide">Oracleus</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['Solutions', 'Products', 'Resources', 'Pricing'].map((item) => (
                            <a key={item} href="#" className="font-ent text-sm text-white/70 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className={`${isMobile ? 'hidden' : 'block'} font-ent text-sm text-white/70 hover:text-white`}>
                            Sign In
                        </button>
                        <button className="font-ent text-sm bg-[#4FC3F7] text-[#003366] px-5 py-2 rounded font-medium hover:bg-[#81D4FA] transition-colors">
                            Request Demo
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`${isMobile ? 'block' : 'hidden'} p-2 text-white`}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-[#002244] border-t border-[#004080] p-4">
                        {['Solutions', 'Products', 'Resources', 'Pricing'].map((item) => (
                            <a key={item} href="#" onClick={() => setMenuOpen(false)} className="block py-3 font-ent text-white/70 hover:text-white border-b border-[#004080] last:border-0">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className={`${isMobile ? 'py-16' : 'py-24'} px-4 bg-gradient-to-b from-[#003366] to-[#004080] text-white`}>
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded text-sm font-ent mb-6">
                        <ShieldCheck size={14} className="text-[#4FC3F7]" /> Trusted by Fortune 500
                    </div>
                    <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-ent font-light mb-6 leading-tight`}>
                        Enterprise-Grade<br />
                        <span className="font-bold text-[#4FC3F7]">Cloud Infrastructure</span>
                    </h1>
                    <p className={`font-ent ${isMobile ? 'text-base' : 'text-xl'} text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed`}>
                        Secure, scalable, and reliable cloud solutions for mission-critical workloads. Deploy with confidence at any scale.
                    </p>
                    <div className={`flex gap-4 justify-center ${isMobile ? 'flex-col' : ''}`}>
                        <button className="font-ent bg-[#4FC3F7] text-[#003366] px-8 py-4 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#81D4FA] transition-colors">
                            Start Free Trial <ArrowRight size={20} />
                        </button>
                        <button className="font-ent text-white px-8 py-4 rounded font-medium border border-white/30 hover:bg-white/10 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-4 bg-white border-b border-[#DCE1E6]">
                <div className="max-w-6xl mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-2' : 'md:grid-cols-4'} gap-8 text-center`}>
                        {[
                            { value: '99.99%', label: 'Uptime SLA' },
                            { value: '50+', label: 'Data Centers' },
                            { value: '10M+', label: 'Requests/sec' },
                            { value: '2,500+', label: 'Enterprise Clients' },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl font-ent font-bold text-[#003366] mb-1">{stat.value}</div>
                                <div className="text-sm text-[#546E7A] font-ent">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ent font-light text-center mb-4`}>Enterprise Solutions</h2>
                    <p className="text-center text-[#546E7A] mb-12 max-w-xl mx-auto font-ent">Built for scale, designed for reliability</p>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                        {[
                            { icon: Server, title: 'Compute', desc: 'Scalable virtual machines with auto-scaling and load balancing' },
                            { icon: Database, title: 'Database', desc: 'Managed relational and NoSQL databases with automatic backups' },
                            { icon: Cloud, title: 'Storage', desc: 'Object, block, and file storage with global replication' },
                            { icon: Lock, title: 'Security', desc: 'End-to-end encryption, IAM, and compliance certifications' },
                            { icon: Globe, title: 'Networking', desc: 'Global VPC, CDN, and dedicated interconnects' },
                            { icon: BarChart3, title: 'Analytics', desc: 'Real-time data processing and business intelligence' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#DCE1E6] rounded p-6 hover:shadow-lg hover:border-[#4FC3F7] transition-all">
                                <item.icon size={32} className="text-[#0055AA] mb-4" />
                                <h3 className="font-ent font-medium text-[#263238] text-lg mb-2">{item.title}</h3>
                                <p className="font-ent text-sm text-[#546E7A]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 px-4 bg-[#E3F2FD]">
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? '' : 'flex gap-12 items-center'}`}>
                        <div className={`flex-1 ${isMobile ? 'mb-8' : ''}`}>
                            <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ent font-light mb-6`}>
                                Security You Can <span className="font-bold text-[#003366]">Trust</span>
                            </h2>
                            <p className="text-[#546E7A] mb-8 font-ent leading-relaxed">
                                Our infrastructure meets the highest security and compliance standards, with certifications from leading regulatory bodies worldwide.
                            </p>
                            <ul className="space-y-4">
                                {['SOC 2 Type II Certified', 'ISO 27001 Compliant', 'GDPR Ready', 'HIPAA Compliant'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-ent text-[#263238]">
                                        <div className="w-6 h-6 rounded bg-[#003366] flex items-center justify-center">
                                            <Check size={14} className="text-[#4FC3F7]" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="bg-white border border-[#90CAF9] rounded p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <ShieldCheck size={32} className="text-[#0055AA]" />
                                    <div>
                                        <h4 className="font-ent font-bold text-[#003366] text-lg mb-2">24/7 Security Monitoring</h4>
                                        <p className="text-sm text-[#546E7A] font-ent">Our security operations center monitors threats around the clock.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-[#0055AA] font-ent font-medium">
                                    <span>Last scan: 12 mins ago</span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        All Systems Secure
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ent font-light text-center mb-12`}>Flexible Pricing</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { name: 'Starter', price: 'Free', desc: 'For developers', features: ['1 Project', '100GB Storage', 'Community Support'] },
                            { name: 'Business', price: '$499/mo', desc: 'For growing teams', features: ['Unlimited Projects', '1TB Storage', '99.9% SLA', 'Priority Support'], featured: true },
                            { name: 'Enterprise', price: 'Custom', desc: 'For large organizations', features: ['Everything in Business', 'Dedicated Support', 'Custom SLA', 'On-premise Option'] },
                        ].map((plan, i) => (
                            <div key={i} className={`rounded p-8 ${plan.featured ? 'bg-[#003366] text-white' : 'bg-white border border-[#DCE1E6]'}`}>
                                <h3 className="font-ent font-medium text-lg mb-1">{plan.name}</h3>
                                <p className={`text-sm mb-4 ${plan.featured ? 'text-white/60' : 'text-[#546E7A]'}`}>{plan.desc}</p>
                                <div className="text-3xl font-ent font-bold mb-6">{plan.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className={`flex items-center gap-3 text-sm font-ent ${plan.featured ? 'text-white/80' : 'text-[#546E7A]'}`}>
                                            <Check size={16} className={plan.featured ? 'text-[#4FC3F7]' : 'text-[#0055AA]'} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded font-ent font-medium ${plan.featured ? 'bg-[#4FC3F7] text-[#003366]' : 'bg-[#003366] text-white'} hover:opacity-90 transition-opacity`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-[#003366] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Users className="w-12 h-12 mx-auto mb-6 text-[#4FC3F7]" />
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ent font-light mb-6`}>Ready to Scale?</h2>
                    <p className="text-white/70 mb-8 max-w-lg mx-auto font-ent">Join thousands of enterprises running mission-critical workloads on Oracleus.</p>
                    <div className={`flex gap-4 justify-center ${isMobile ? 'flex-col' : ''}`}>
                        <button className="font-ent bg-[#4FC3F7] text-[#003366] px-10 py-4 rounded font-medium hover:bg-[#81D4FA] transition-colors">
                            Start Free Trial
                        </button>
                        <button className="font-ent text-white px-10 py-4 rounded font-medium border border-white/30 hover:bg-white/10 transition-colors">
                            Talk to Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-white border-t border-[#DCE1E6]">
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'flex flex-col gap-8' : 'flex justify-between'} mb-8`}>
                        <div className="flex items-center gap-3">
                            <Database size={24} className="text-[#0055AA]" />
                            <span className="font-ent font-bold text-lg uppercase text-[#003366]">Oracleus</span>
                        </div>
                        <div className={`flex ${isMobile ? 'flex-wrap' : ''} gap-6 text-sm text-[#546E7A] font-ent`}>
                            {['Solutions', 'Products', 'Resources', 'Company', 'Support', 'Legal'].map((item) => (
                                <a key={item} href="#" className="hover:text-[#0055AA] transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center text-xs text-[#90A4AE] pt-8 border-t border-[#DCE1E6] font-ent">
                        © 2024 Oracleus Enterprise Solutions. All rights reserved. | Version 24.0.1
                    </div>
                </div>
            </footer>
        </div>
    );
};
