'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    ArrowRight,
    Gem,
    Sparkles,
    Layout,
    ChevronRight,
    Shield,
    CheckCircle2,
    ChevronDown,
    Languages,
    ArrowUpRight,
    Monitor,
    Database,
    Lock,
    Box,
    Menu,
    X,
    Plus,
    Globe,
    Layers
} from 'lucide-react';

// S01-F Motion Config
const fadeIn = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const LandingPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [selectedBento, setSelectedBento] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'zh-TW' ? 'en' : 'zh-TW';
        i18n.changeLanguage(nextLang);
    };

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const bentoItems = [
        { id: 1, title: t('landing.workflow.b1.title'), desc: t('landing.workflow.b1.desc'), icon: <Monitor className="w-5 h-5 text-purple-400" /> },
        { id: 2, title: t('landing.workflow.b2.title'), desc: t('landing.workflow.b2.desc'), icon: <Layers className="w-5 h-5 text-purple-400" /> },
        { id: 3, title: t('landing.workflow.b3.title'), desc: t('landing.workflow.b3.desc'), icon: <Zap className="w-5 h-5 text-purple-400" /> },
        { id: 4, title: t('landing.workflow.b4.title'), desc: t('landing.workflow.b4.desc'), icon: <Database className="w-5 h-5 text-purple-400" /> }
    ];

    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"
                />
            </div>

            {/* 1. Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            href="/"
                            onClick={handleLogoClick}
                            className="flex items-center space-x-2 group"
                        >
                            <span className="text-xl font-bold tracking-tight">
                                Style<span className="text-purple-400">Prompts</span>
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
                            {['features', 'workflow', 'pricing', 'faq'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={(e) => scrollToSection(e, item)}
                                    className="hover:text-white transition-colors relative group"
                                >
                                    {t(`landing.nav.${item}`)}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500"
                                        whileHover={{ width: '100%' }}
                                    />
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleLanguage}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white flex items-center gap-2"
                            >
                                <Languages className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase">{i18n.language === 'zh-TW' ? 'EN' : 'TW'}</span>
                            </button>
                            <Link
                                href="/S01"
                                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-600/20"
                            >
                                <span>{t('landing.nav.enterEditor')}</span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden bg-[#0a0a0a] border-t border-white/5 relative z-[100]"
                        >
                            <div className="py-6 px-6 space-y-4">
                                {['features', 'workflow', 'pricing', 'faq'].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => {
                                            const element = document.getElementById(item);
                                            if (element) {
                                                setMobileMenuOpen(false);
                                                setTimeout(() => {
                                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                }, 100);
                                            }
                                        }}
                                        className="block w-full py-3 text-left text-white/60 hover:text-white active:text-purple-400 transition-colors font-medium border-b border-white/5"
                                        style={{ touchAction: 'manipulation' }}
                                    >
                                        {t(`landing.nav.${item}`)}
                                    </button>
                                ))}
                                <Link
                                    href="/S01"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full py-4 bg-purple-600 text-white text-sm font-bold rounded-2xl hover:bg-purple-500 active:bg-purple-700 transition-all text-center mt-4"
                                    style={{ touchAction: 'manipulation' }}
                                >
                                    {t('landing.nav.enterEditor')}
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* 2. Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="text-left"
                        >
                            <motion.div variants={fadeIn} className="inline-flex items-center px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
                                <Sparkles className="w-3.5 h-3.5 mr-2 text-purple-400" />
                                <span className="text-xs font-medium text-purple-300 tracking-wide uppercase">{t('landing.hero.badge')}</span>
                            </motion.div>
                            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                                {t('landing.hero.title')}
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-lg text-white/40 mb-12 max-w-xl leading-relaxed font-light">
                                {t('landing.hero.subtitle')}
                            </motion.p>
                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/S01"
                                    className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-purple-600/20 flex items-center justify-center group"
                                >
                                    {t('landing.hero.cta.primary')}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/5 text-white/60 hover:text-white font-semibold rounded-xl transition-all flex items-center justify-center">
                                    {t('landing.hero.cta.secondary')}
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] group aspect-[16/10]">
                                <div className="h-8 w-full bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                </div>
                                <div className="p-6 h-full flex flex-col gap-4">
                                    <div className="h-10 w-48 bg-white/5 rounded-lg border border-white/10" />
                                    <div className="grid grid-cols-4 gap-3 flex-1">
                                        {[...Array(4)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1 + (i * 0.1) }}
                                                className="h-full bg-white/[0.02] rounded-xl border border-white/5 flex flex-col p-3 gap-2"
                                            >
                                                <div className="h-2 w-full bg-white/10 rounded" />
                                                <div className="h-2 w-2/3 bg-white/5 rounded" />
                                                <div className="mt-auto h-20 bg-purple-500/5 rounded-lg border border-purple-500/10" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-[60px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Features Section */}
            <section id="features" className="py-24 sm:py-32 border-y border-white/5 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-20"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-white">{t('landing.features.title')}</motion.h2>
                        <motion.p variants={fadeIn} className="text-white/40 max-w-2xl mx-auto text-lg">{t('landing.features.subtitle')}</motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                whileHover={{ y: -5, borderColor: 'rgba(168,85,247,0.2)' }}
                                className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20"
                                >
                                    {i === 1 ? <Box className="w-6 h-6 text-purple-400" /> : i === 2 ? <Globe className="w-6 h-6 text-purple-400" /> : <Zap className="w-6 h-6 text-purple-400" />}
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4">{t(`landing.features.f${i}.title`)}</h3>
                                <p className="text-white/40 leading-relaxed font-light">{t(`landing.features.f${i}.desc`)}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Bento Grid */}
            <section id="workflow" className="py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-20"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-white">{t('landing.workflow.title')}</motion.h2>
                        <motion.p variants={fadeIn} className="text-white/40 max-w-2xl mx-auto text-lg font-light">{t('landing.workflow.subtitle')}</motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[360px]"
                    >
                        {/* Bento Card 1 */}
                        <motion.button
                            variants={fadeIn}
                            whileHover={{ scale: 0.995 }}
                            onClick={() => setSelectedBento(1)}
                            className="md:col-span-8 bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/5 flex flex-col group text-left transition-all hover:bg-white/[0.02] hover:border-purple-500/20 relative overflow-hidden"
                        >
                            <div className="mb-8 max-w-sm"><h3 className="text-2xl font-bold mb-3 text-white">{t('landing.workflow.b1.title')}</h3><p className="text-white/40 text-sm leading-relaxed">{t('landing.workflow.b1.desc')}</p></div>
                            <div className="flex-1 bg-white/[0.02] rounded-3xl border border-white/5 p-6 overflow-hidden relative">
                                {/* Line Animation Container */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 p-8">
                                    {/* Line 1 */}
                                    <div className="w-full h-px bg-white/5 relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: ['-100%', '200%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0 }}
                                            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                                        />
                                    </div>
                                    {/* Line 2 */}
                                    <div className="w-full h-px bg-white/5 relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: ['200%', '-100%'] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.3 }}
                                            className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                        />
                                    </div>
                                    {/* Line 3 */}
                                    <div className="w-full h-px bg-white/5 relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: ['-100%', '200%'] }}
                                            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.6 }}
                                            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
                                        />
                                    </div>
                                    {/* Vertical Lines */}
                                    <div className="absolute inset-0 flex justify-around items-stretch opacity-20">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-px h-full bg-white/10 relative overflow-hidden">
                                                <motion.div
                                                    animate={{ y: ['-100%', '200%'] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: i * 0.4 }}
                                                    className="absolute inset-x-0 h-1/4 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.button>

                        {/* Bento Card 2 */}
                        <motion.button
                            variants={fadeIn}
                            whileHover={{ scale: 0.995 }}
                            onClick={() => setSelectedBento(2)}
                            className="md:col-span-4 bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/5 flex flex-col group text-left transition-all hover:bg-white/[0.02] hover:border-purple-500/20 relative overflow-hidden"
                        >
                            <div className="mb-8"><h3 className="text-2xl font-bold mb-3 text-white">{t('landing.workflow.b2.title')}</h3><p className="text-white/40 text-sm leading-relaxed">{t('landing.workflow.b2.desc')}</p></div>
                            <div className="flex-1 bg-white/[0.02] rounded-3xl border border-white/5 p-6 flex flex-col gap-4 overflow-hidden">
                                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 transition-transform"><div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 font-black text-xs">Sa</div><div className="flex-1 text-xs font-bold text-white/70">SaaS 平台</div><ArrowUpRight className="w-4 h-4 text-white/10" /></motion.div>
                                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 transition-transform"><div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 font-black text-xs">商</div><div className="flex-1 text-xs font-bold text-white/70">電商平台</div><ArrowUpRight className="w-4 h-4 text-white/10" /></motion.div>
                                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 transition-transform"><div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 font-black text-xs">醫</div><div className="flex-1 text-xs font-bold text-white/70">醫療系統</div><ArrowUpRight className="w-4 h-4 text-white/10" /></motion.div>
                            </div>
                        </motion.button>

                        {/* Bento Card 3 */}
                        <motion.button
                            variants={fadeIn}
                            whileHover={{ scale: 0.995 }}
                            onClick={() => setSelectedBento(3)}
                            className="md:col-span-4 bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/5 flex flex-col group text-left transition-all hover:bg-white/[0.02] hover:border-purple-500/20 relative overflow-hidden"
                        >
                            <div className="mb-8"><h3 className="text-2xl font-bold mb-3 text-white">{t('landing.workflow.b3.title')}</h3><p className="text-white/40 text-sm leading-relaxed">{t('landing.workflow.b3.desc')}</p></div>
                            <div className="flex-1 bg-white/[0.02] rounded-3xl border border-white/5 p-6 flex flex-col gap-4 relative overflow-hidden">
                                <div className="h-10 w-full bg-white/10 rounded-xl border border-white/10 p-3 flex items-center gap-3">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="w-2 h-2 rounded-full bg-purple-500"
                                    />
                                    <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="w-1/2 h-full bg-purple-500/50"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 flex-1">
                                    <div className="bg-purple-600/10 rounded-2xl border border-purple-500/20 flex flex-col items-center justify-center group-hover:scale-[1.05] transition-transform"><Lock className="w-10 h-10 text-purple-600/40" /><span className="text-[8px] mt-2 text-purple-500/40 font-black uppercase tracking-widest">SECURE</span></div>
                                    <div className="bg-blue-600/10 rounded-2xl border border-blue-500/20 flex flex-col items-center justify-center opacity-40 group-hover:scale-[1.05] transition-transform"><Shield className="w-10 h-10 text-blue-600/40" /><span className="text-[8px] mt-2 text-blue-500/40 font-black uppercase tracking-widest">VERIFIED</span></div>
                                </div>
                            </div>
                        </motion.button>

                        {/* Bento Card 4 */}
                        <motion.button
                            variants={fadeIn}
                            whileHover={{ scale: 0.995 }}
                            onClick={() => setSelectedBento(4)}
                            className="md:col-span-8 bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/5 flex flex-col group text-left transition-all hover:bg-white/[0.02] hover:border-purple-500/20 relative overflow-hidden"
                        >
                            <div className="mb-8 max-sm"><h3 className="text-2xl font-bold mb-3 text-white">{t('landing.workflow.b4.title')}</h3><p className="text-white/40 text-sm leading-relaxed">{t('landing.workflow.b4.desc')}</p></div>
                            <div className="flex-1 bg-white/[0.02] rounded-3xl border border-white/5 p-8 overflow-hidden relative">
                                <div className="grid grid-cols-4 gap-6 h-full opacity-20">
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -8 }}
                                            className="bg-white/5 rounded-2xl border border-white/10 p-3 flex flex-col gap-3 transition-transform"
                                        >
                                            <div className="h-1.5 w-full bg-white/10 rounded-full" />
                                            <div className="h-full bg-white/[0.02] rounded-xl flex items-center justify-center"><Layout className="w-5 h-5 text-white/5" /></div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute bottom-10 left-1/2 -translate-x-1/2 px-10 py-4 bg-white text-black rounded-2xl text-sm font-black shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center gap-3 transition-all cursor-pointer"
                                >
                                    <Plus className="w-5 h-5" /> Sync to Workspace
                                </motion.div>
                            </div>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* 5. Pricing Section */}
            <section id="pricing" className="py-24 sm:py-32 border-y border-white/5 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-20"
                    >
                        <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white">{t('landing.pricing.title')}</motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
                    >
                        {/* Free Plan */}
                        <motion.div
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                            className="p-10 rounded-[3rem] border border-white/5 bg-[#0a0a0a] flex flex-col relative overflow-hidden group"
                        >
                            <div className="mb-10">
                                <div className="text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-4">{t('landing.pricing.free.use')}</div>
                                <h3 className="text-4xl font-bold mb-8">{t('landing.pricing.free.name')}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-black text-white tracking-tighter">NT$0</span>
                                </div>
                            </div>
                            <ul className="space-y-5 mb-12 flex-1">
                                {[1, 2, 3].map(i => (
                                    <li key={i} className="flex items-center gap-4 text-white/50 text-sm font-light">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                        {t(`landing.pricing.free.f${i}`)}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/S01"
                                className="w-full py-6 rounded-2xl bg-purple-600 text-white font-black text-sm uppercase tracking-widest hover:bg-purple-500 transition-all text-center shadow-lg shadow-purple-600/20"
                            >
                                {t('landing.pricing.startNow')}
                            </Link>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                            className="p-10 rounded-[3rem] border border-purple-500/40 bg-purple-500/[0.03] flex flex-col relative overflow-hidden group shadow-[0_0_100px_rgba(139,92,246,0.1)]"
                        >
                            <div className="absolute top-8 right-8 px-4 py-1.5 bg-purple-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-purple-600/40">{t('landing.pricing.comingSoon')}</div>
                            <div className="mb-10">
                                <div className="text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-4">{t('landing.pricing.pro.use')}</div>
                                <h3 className="text-4xl font-bold mb-8">{t('landing.pricing.pro.name')}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-black text-white tracking-tighter">NT$2000</span>
                                </div>
                            </div>
                            <ul className="space-y-5 mb-12 flex-1">
                                {[1, 2, 3].map(i => (
                                    <li key={i} className="flex items-center gap-4 text-white/80 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500" />
                                        {t(`landing.pricing.pro.f${i}`)}
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full py-6 rounded-2xl bg-white/10 text-white/30 font-black text-sm uppercase tracking-widest text-center cursor-not-allowed">
                                {t('landing.pricing.comingSoon')}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 6. FAQ Section */}
            <section id="faq" className="py-24 sm:py-32">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-20 underline decoration-purple-600 decoration-8 underline-offset-[12px]"
                    >
                        {t('landing.faq.title')}
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-6"
                    >
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                className="border border-white/5 rounded-[2rem] overflow-hidden bg-[#0a0a0a] transition-colors hover:border-purple-500/20"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-8 text-left transition-colors"
                                >
                                    <span className="font-bold text-lg pr-8">{t(`landing.faq.q${i}`)}</span>
                                    <motion.div
                                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`p-2 rounded-full bg-white/5 text-white/20 transition-all ${openFaq === i ? 'bg-purple-600/20 text-purple-400' : ''}`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-8 pt-0 text-white/40 leading-relaxed font-light text-sm">{t(`landing.faq.a${i}`)}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 7. Final CTA Section */}
            <section className="py-32 sm:py-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-[#0a0a0a]" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"
                />
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-7xl font-bold mb-10 tracking-tighter leading-[1.1]"
                    >
                        {t('finalCta.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/40 mb-16 max-w-2xl mx-auto font-light"
                    >
                        {t('finalCta.subtitle')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8"
                    >
                        <Link
                            href="/S01"
                            className="w-full sm:w-auto px-16 py-6 bg-purple-600 text-white font-black rounded-[2rem] hover:bg-purple-500 transition-all shadow-[0_20px_60px_rgba(168,85,247,0.3)] group relative overflow-hidden active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-3">{t('finalCta.button')}<ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" /></span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 8. Footer */}
            <footer className="py-24 bg-[#030303] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
                        <div className="col-span-2 lg:col-span-3">
                            <div className="flex items-center space-x-2 mb-8">
                                <span className="text-2xl font-black tracking-tighter text-white">Style<span className="text-purple-500">Prompts</span></span>
                            </div>
                            <p className="text-white/30 text-sm leading-relaxed max-w-sm font-light">{t('landing.footer.description')}</p>
                        </div>
                        <div>
                            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">{t('landing.footer.system')}</h4>
                            <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                                {[
                                    { key: 'coreTech', path: '/features/core-tech' },
                                    { key: 'visualWorkflow', path: '/features/workflow' },
                                    { key: 'promptEditor', path: '/features/editor' },
                                    { key: 'membership', path: '/features/membership' }
                                ].map(item => (
                                    <li key={item.key}>
                                        <Link href={item.path} className="hover:text-white transition-colors">
                                            {t(`landing.footer.${item.key}`)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8 opacity-40">{t('landing.footer.security')}</h4>
                            <ul className="space-y-4 text-[13px] text-white/40 font-medium">
                                <li><Link href="/legal/privacy" className="hover:text-white transition-colors">{t('landing.footer.privacy')}</Link></li>
                                <li><Link href="/legal/terms" className="hover:text-white transition-colors">{t('landing.footer.terms')}</Link></li>
                                <li><Link href="/coffee" className="hover:text-white transition-colors flex items-center gap-2">{t('landing.footer.coffee')} ☕</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.2em] text-white/20 font-black">
                        <div>{t('landing.footer.copyright')}</div>
                    </div>
                </div>
            </footer>

            {/* Bento Modal */}
            <AnimatePresence>
                {selectedBento !== null && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBento(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] max-w-4xl w-full relative shadow-[0_0_150px_rgba(139,92,246,0.15)] ring-1 ring-white/5 z-10 overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedBento(null)}
                                className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:scale-110 active:scale-95 transition-all text-sm z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Visual Content Area */}
                            <div className="aspect-video bg-[#050505] relative overflow-hidden">
                                {/* Card 1: Line Animation */}
                                {selectedBento === 1 && (
                                    <div className="absolute inset-0 flex flex-col justify-center items-center gap-10 p-16">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-full h-0.5 bg-white/5 relative overflow-hidden">
                                                <motion.div
                                                    animate={{ x: i % 2 === 0 ? ['-100%', '200%'] : ['200%', '-100%'] }}
                                                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'linear', delay: i * 0.2 }}
                                                    className={`absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent ${i === 0 ? 'via-purple-500' : i === 1 ? 'via-blue-500' : i === 2 ? 'via-pink-500' : i === 3 ? 'via-cyan-500' : 'via-green-500'} to-transparent`}
                                                />
                                            </div>
                                        ))}
                                        <div className="absolute inset-0 flex justify-around items-stretch opacity-30">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className="w-0.5 h-full bg-white/5 relative overflow-hidden">
                                                    <motion.div
                                                        animate={{ y: ['-100%', '200%'] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
                                                        className="absolute inset-x-0 h-1/4 bg-gradient-to-b from-transparent via-purple-500/60 to-transparent"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Card 2: Industry Cards */}
                                {selectedBento === 2 && (
                                    <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 p-16">
                                        {[
                                            { name: 'SaaS 平台', icon: 'Sa', color: 'purple' },
                                            { name: '電商平台', icon: '商', color: 'blue' },
                                            { name: '醫療系統', icon: '醫', color: 'green' }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ x: -50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.15 }}
                                                whileHover={{ x: 10, scale: 1.02 }}
                                                className="w-full max-w-md flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 transition-all cursor-pointer"
                                            >
                                                <div className={`w-16 h-16 ${item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'} rounded-2xl flex items-center justify-center font-black text-xl`}>{item.icon}</div>
                                                <div className="flex-1 text-lg font-bold text-white/80">{item.name}</div>
                                                <ArrowUpRight className="w-6 h-6 text-white/20" />
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {/* Card 3: Security Animation */}
                                {selectedBento === 3 && (
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-16">
                                        <div className="flex items-center gap-6 mb-8">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="w-2 h-2 rounded-full bg-purple-500"
                                            />
                                            <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    animate={{ x: ['-100%', '100%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                                    className="w-1/2 h-full bg-purple-500/50"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="aspect-square bg-purple-600/10 rounded-3xl border border-purple-500/20 flex flex-col items-center justify-center"
                                            >
                                                <Lock className="w-16 h-16 text-purple-600/60" />
                                                <span className="text-sm mt-4 text-purple-500/60 font-black uppercase tracking-widest">SECURE</span>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="aspect-square bg-blue-600/10 rounded-3xl border border-blue-500/20 flex flex-col items-center justify-center"
                                            >
                                                <Shield className="w-16 h-16 text-blue-600/60" />
                                                <span className="text-sm mt-4 text-blue-500/60 font-black uppercase tracking-widest">VERIFIED</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                )}

                                {/* Card 4: Grid Preview */}
                                {selectedBento === 4 && (
                                    <div className="absolute inset-0 p-12">
                                        <div className="grid grid-cols-4 gap-4 h-full opacity-40">
                                            {[...Array(8)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    whileHover={{ y: -10, scale: 1.05 }}
                                                    className="bg-white/5 rounded-2xl border border-white/10 p-4 flex flex-col gap-3"
                                                >
                                                    <div className="h-2 w-full bg-white/10 rounded-full" />
                                                    <div className="flex-1 bg-white/[0.02] rounded-xl flex items-center justify-center">
                                                        <Layout className="w-8 h-8 text-white/10" />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="absolute bottom-12 left-1/2 -translate-x-1/2 px-12 py-5 bg-white text-black rounded-2xl font-black flex items-center gap-3 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                                        >
                                            <Plus className="w-6 h-6" /> Sync to Workspace
                                        </motion.div>
                                    </div>
                                )}
                            </div>

                            {/* Title & Description */}
                            <div className="p-10">
                                <h3 className="text-3xl font-black mb-4 text-white tracking-tighter">{bentoItems.find(item => item.id === selectedBento)?.title}</h3>
                                <p className="text-white/40 text-lg leading-relaxed font-light mb-8">{bentoItems.find(item => item.id === selectedBento)?.desc}</p>
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
                                    <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" /><span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">StylePrompts</span></div>
                                    <Link
                                        href={`/features/workflow/step${selectedBento}`}
                                        className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-slate-200 transition-all shadow-xl shadow-white/5 text-center"
                                    >
                                        {t('landing.workflow.learnMore')}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
