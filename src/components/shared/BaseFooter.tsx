'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export interface BaseFooterProps {
    variant: 'free' | 'pro';
}

export const BaseFooter: React.FC<BaseFooterProps> = ({ variant }) => {
    const { t } = useTranslation();
    const isPro = variant === 'pro';

    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: t('landing.footer.features'), href: '#features' },
        { label: t('landing.footer.faq'), href: '#faq' },
        { label: t('landing.footer.pricing'), href: isPro ? '#pricing' : '/pro' },
    ];

    const legalLinks = [
        { label: t('landing.footer.terms'), href: '/legal/terms' },
        { label: t('landing.footer.privacy'), href: '/legal/privacy' },
    ];

    return (
        <footer className={`relative py-16 border-t ${isPro ? 'border-white/[0.08] bg-[#030303]' : 'border-white/5 bg-[#0a0a0a]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <Link href={isPro ? '/pro' : '/'} className="text-2xl font-bold tracking-tight mb-2">
                            Style<span className="text-purple-400">Prompts</span>
                            {isPro && <span className="ml-2 text-sm text-purple-400 font-normal">Pro</span>}
                        </Link>
                        <p className="text-sm text-white/40">{t('landing.footer.tagline')}</p>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm"
                    >
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="w-px h-4 bg-white/10 hidden sm:block" />
                        {legalLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-white/40 hover:text-white/60 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>

                    {/* Support Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/coffee"
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white/60 hover:text-white transition-all"
                        >
                            <Coffee className="w-4 h-4" />
                            {t('landing.footer.support')}
                        </Link>
                    </motion.div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-sm text-white/30">
                        © {currentYear} StylePrompts. {t('landing.footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};
