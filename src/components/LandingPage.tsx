'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Monitor, Layers, Zap, Database } from 'lucide-react';
import {
    Navbar,
    HeroSection,
    FeaturesSection,
    WorkflowBento,
    FaqSection,
    CtaSection,
    ContactSection,
    Footer,
    BentoModal,
    PromoTopBar,
    type BentoItem
} from './landing';

export const LandingPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [selectedBento, setSelectedBento] = useState<number | null>(null);

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

    // Bento items for WorkflowBento and BentoModal
    const bentoItems: BentoItem[] = [
        { id: 1, title: t('landing.workflow.b1.title'), desc: t('landing.workflow.b1.desc'), icon: <Monitor className="w-5 h-5 text-purple-400" /> },
        { id: 2, title: t('landing.workflow.b2.title'), desc: t('landing.workflow.b2.desc'), icon: <Layers className="w-5 h-5 text-purple-400" /> },
        { id: 3, title: t('landing.workflow.b3.title'), desc: t('landing.workflow.b3.desc'), icon: <Zap className="w-5 h-5 text-purple-400" /> },
        { id: 4, title: t('landing.workflow.b4.title'), desc: t('landing.workflow.b4.desc'), icon: <Database className="w-5 h-5 text-purple-400" /> }
    ];

    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">
            {/* Pro Promo Top Bar */}
            <PromoTopBar />

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

            {/* Navigation */}
            <Navbar
                onScrollToSection={scrollToSection}
                toggleLanguage={toggleLanguage}
                currentLang={i18n.language}
            />

            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Workflow Bento Grid */}
            <WorkflowBento onSelectBento={setSelectedBento} />

            {/* FAQ Section */}
            <FaqSection />

            {/* Final CTA Section */}
            <CtaSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />

            {/* Bento Modal */}
            <BentoModal
                selectedBento={selectedBento}
                bentoItems={bentoItems}
                onClose={() => setSelectedBento(null)}
            />
        </div>
    );
};
