'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
    ProNavbar,
    ProHeroSection,
    ProStyleShowcase,
    ProPricingSection,
    FaqSection,
    Footer,
} from './landing';

export const ProLandingPage: React.FC = () => {
    const { i18n } = useTranslation();

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

    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">
            {/* Premium Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Main gradient */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[150px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    className="absolute top-[20%] right-[-15%] w-[50%] h-[50%] bg-pink-900/15 rounded-full blur-[150px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.6 }}
                    className="absolute bottom-[-10%] left-[30%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"
                />
            </div>

            {/* Pro Navigation with Auth */}
            <ProNavbar
                onScrollToSection={scrollToSection}
                toggleLanguage={toggleLanguage}
                currentLang={i18n.language}
            />

            {/* Pro Hero Section */}
            <ProHeroSection />

            {/* Pro Style Showcase */}
            <ProStyleShowcase />

            {/* Pro Pricing Section */}
            <ProPricingSection />

            {/* FAQ Section */}
            <FaqSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};
