'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProNavbar } from './ProNavbar';
import { ProHeroSection } from './ProHeroSection';
import { ProStyleShowcase } from './ProStyleShowcase';
import { ProTemplateShowcase } from './ProTemplateShowcase';
import { ProPricingSection } from './ProPricingSection';
import { ProFaqSection } from './ProFaqSection';
import { ProFooter } from './ProFooter';

export const ProLandingPage: React.FC = () => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language || 'zh-TW');

    const toggleLanguage = () => {
        const newLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
    };

    const handleScrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 relative">
            {/* Global Background System */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[#020202]" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10">
                <ProNavbar
                    onScrollToSection={handleScrollToSection}
                    toggleLanguage={toggleLanguage}
                    currentLang={currentLang}
                />
                <ProHeroSection />
                <ProStyleShowcase />
                <ProTemplateShowcase />
                <ProPricingSection />
                <ProFaqSection />
                <ProFooter />
            </div>
        </div>
    );
};
