import { useState } from 'react';
import { Layout, Zap, Smartphone, ArrowRight, Menu, X, Check, Star, Globe, Shield } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S26Flat2 = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    const colors = {
        bg: '#FFFFFF',
        bgSecondary: '#F3F4F6',
        text: '#111827',
        textSecondary: '#4B5563',
        primary: '#6366F1',
        primaryLight: '#E0E7FF',
        secondary: '#8B5CF6',
        accent: '#F472B6',
        success: '#10B981',
    };

    return (
        <div className="min-h-screen font-sans text-slate-900 bg-white">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className={`max-w-7xl mx-auto px-4 ${!isMobile ? 'sm:px-6 lg:px-8' : ''}`}>
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                                <Layout size={20} />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-slate-800">FlatUI</span>
                        </div>

                        <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                            <a href="#" className="font-medium text-slate-500 hover:text-indigo-600 transition-colors">Products</a>
                            <a href="#" className="font-medium text-slate-500 hover:text-indigo-600 transition-colors">Resources</a>
                            <a href="#" className="font-medium text-slate-500 hover:text-indigo-600 transition-colors">Pricing</a>
                            <button className="px-5 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                                Start Free
                            </button>
                        </div>

                        {responsive.nav.showMobile && (
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                {menuOpen ? <X className="text-slate-600" /> : <Menu className="text-slate-600" />}
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
                                Products
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Resources
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Pricing
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 overflow-hidden">
                <div className={`max-w-7xl mx-auto px-4 ${isMobile ? '' : 'px-6 lg:px-8'}`}>
                    <div className={`flex flex-col ${isMobile ? '' : 'flex-row'} items-center gap-16`}>
                        <div className={`flex-1 space-y-8 ${isMobile ? 'text-center' : 'text-left'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm">
                                <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                                v2.0 is now available
                            </div>

                            <h1 className={`text-5xl ${!isMobile ? 'lg:text-7xl' : ''} font-extrabold tracking-tight text-slate-900 leading-[1.1]`}>
                                Simplicity is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Ultimate Sophistication</span>
                            </h1>

                            <p className={`text-xl text-slate-500 max-w-2xl ${isMobile ? 'mx-auto' : 'mx-0'} leading-relaxed`}>
                                Build beautiful, functional interfaces with our modern flat design system. Perfectly balanced, accessible, and delightful to use.
                            </p>

                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 ${isMobile ? 'justify-center' : 'justify-start'}`}>
                                <button className="px-8 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:-translate-y-1">
                                    Get Started Now
                                </button>
                                <button className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    View Components
                                </button>
                            </div>

                            <div className={`pt-8 flex items-center ${isMobile ? 'justify-center' : 'justify-start'} gap-8 text-slate-400`}>
                                <div className="flex items-center gap-2 font-medium"><Check size={16} className="text-green-500" /> Free Tier</div>
                                <div className="flex items-center gap-2 font-medium"><Check size={16} className="text-green-500" /> Open Source</div>
                                <div className="flex items-center gap-2 font-medium"><Check size={16} className="text-green-500" /> TypeScript</div>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="flex-1 w-full relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-50 -z-10" />

                            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 relative">
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-indigo-50 rounded-2xl">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm mb-3 flex items-center justify-center text-indigo-600">
                                            <Zap size={20} />
                                        </div>
                                        <div className="h-2 w-20 bg-indigo-200 rounded mb-2" />
                                        <div className="h-2 w-32 bg-indigo-200 rounded opacity-50" />
                                    </div>
                                    <div className="p-4 bg-purple-50 rounded-2xl">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm mb-3 flex items-center justify-center text-purple-600">
                                            <Star size={20} />
                                        </div>
                                        <div className="h-2 w-20 bg-purple-200 rounded mb-2" />
                                        <div className="h-2 w-32 bg-purple-200 rounded opacity-50" />
                                    </div>
                                    <div className="col-span-2 p-6 bg-slate-800 rounded-2xl text-white">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="h-3 w-24 bg-slate-600 rounded" />
                                            <div className="h-3 w-8 bg-slate-600 rounded" />
                                        </div>
                                        <div className="h-24 bg-slate-700/50 rounded-xl w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid grid-cols-2 ${!isMobile ? 'md:grid-cols-4' : ''} gap-8`}>
                        {[
                            { label: 'Users', value: '100K+' },
                            { label: 'Components', value: '500+' },
                            { label: 'Downloads', value: '2M+' },
                            { label: 'Rating', value: '4.9/5' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className={`text-3xl ${!isMobile ? 'md:text-4xl' : ''} font-extrabold text-indigo-600 mb-1`}>{stat.value}</div>
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to build faster</h2>
                        <p className="text-lg text-slate-500">
                            Stop reinventing the wheel. Our component library provides everything you need to build world-class applications.
                        </p>
                    </div>

                    <div className={`grid ${!isMobile ? 'md:grid-cols-3' : ''} gap-8`}>
                        {[
                            { icon: Smartphone, title: 'Responsive', desc: 'Looks perfect on any device, from mobile to desktop.', color: 'text-blue-500', bg: 'bg-blue-50' },
                            { icon: Globe, title: 'Global', desc: 'Localization ready with built-in i18n support.', color: 'text-green-500', bg: 'bg-green-50' },
                            { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security defaults out of the box.', color: 'text-purple-500', bg: 'bg-purple-50' },
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300">
                                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={28} className={feature.color} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {feature.desc}
                                </p>
                                <div className="mt-6 flex items-center text-indigo-600 font-semibold cursor-pointer group-hover:gap-2 gap-1 transition-all">
                                    Learn more <ArrowRight size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-overlay blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <h2 className={`text-3xl ${!isMobile ? 'md:text-5xl' : ''} font-bold text-white mb-6`}>Ready to transform your workflow?</h2>
                        <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-10">
                            Join thousands of developers seeking simplicity and power. Start your free trial today.
                        </p>
                        <div className={`flex flex-col ${!isMobile ? 'sm:flex-row' : ''} gap-4 justify-center`}>
                            <button className="px-8 py-4 rounded-xl font-bold text-indigo-900 bg-white hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10">
                                Get Started Free
                            </button>
                            <button className="px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
                <div className={`max-w-7xl mx-auto px-4 ${isMobile ? '' : 'px-6'}`}>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center`}>
                        <div className={`flex items-center gap-2 ${isMobile ? 'mb-4' : 'mb-0'}`}>
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                                <Layout size={16} />
                            </div>
                            <span className="font-bold text-xl text-slate-800">FlatUI</span>
                        </div>
                        <div className="text-slate-400 text-sm">
                            © 2024 FlatUI Design System. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
