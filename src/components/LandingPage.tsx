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
    Footer
} from './landing';
import { WorkflowModal } from './landing/WorkflowModal';

export const LandingPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [selectedWorkflow, setSelectedWorkflow] = useState<number | null>(null);

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
            <WorkflowBento onSelectBento={setSelectedWorkflow} />

            {/* Workflow Modal */}
            <WorkflowModal 
                isOpen={selectedWorkflow !== null}
                onClose={() => setSelectedWorkflow(null)}
                workflowId={selectedWorkflow}
            />

            {/* FAQ Section */}
            <FaqSection />

            {/* Final CTA Section */}
            <CtaSection />


            {/* Footer */}
            <Footer />
        </div>
    );
};
