'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Info, Monitor, Laptop, Smartphone, Maximize2, Sparkles, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styles, hasProVersion, isNewYearPromoActive } from '@/data/styles';
import { styleComponents, styleComponentsPro } from '@/components/styles';
import { useLayoutContext } from '@/components/MainLayout';
import { PromptModal } from '@/components/PromptModal';
import { ProUpgradeModal } from '@/components/ProUpgradeModal';

interface PreviewContentProps {
    styleId: string;
}

export const PreviewContent: React.FC<PreviewContentProps> = ({ styleId }) => {
    const { deviceMode, setDeviceMode, previewTier } = useLayoutContext();
    const { t } = useTranslation();
    const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
    const [isProModalOpen, setIsProModalOpen] = useState(false);
    const effectiveStyleId = styleId || 'S01';
    const currentStyle = styles.find(s => s.id === effectiveStyleId);

    // Select component based on tier and availability
    const shouldUsePro = previewTier === 'pro' && hasProVersion(effectiveStyleId) && styleComponentsPro[effectiveStyleId];
    const SelectedComponent = shouldUsePro
        ? styleComponentsPro[effectiveStyleId]
        : styleComponents[effectiveStyleId];

    useEffect(() => {
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        const rafId = requestAnimationFrame(() => {
            window.scrollTo(scrollX, scrollY);
        });

        return () => cancelAnimationFrame(rafId);
    }, [deviceMode]);

    if (!currentStyle || !SelectedComponent) {
        return (
            <main className="flex-1 bg-[#111] overflow-hidden flex items-center justify-center">
                <div className="text-white/60">{t('preview.styleNotFound')}</div>
            </main>
        );
    }

    return (
        <main className="flex-1 bg-[#111] overflow-hidden flex flex-col p-2 md:p-4 lg:p-8">
            {/* Header Content: Info, Device Switcher, and Open Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-3 md:mb-6">
                {/* Left: Info Text with Tier Badge */}
                <div className="flex items-center gap-3 md:flex-1">
                    <div className="flex items-center gap-2 text-white/40 text-xs md:text-sm">
                        <Info className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="leading-tight">{t('preview.previewInfo')}</span>
                    </div>
                    {/* Tier Badge based on actual displayed component */}
                    {shouldUsePro ? (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 rounded-full">
                            <Sparkles className="w-3 h-3 text-purple-400" />
                            <span className="text-xs font-medium text-purple-300">Pro</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 border border-white/20 rounded-full">
                            <span className="text-xs font-medium text-white/60">Free</span>
                        </div>
                    )}
                </div>

                {/* Center: Device Switcher - Mac Dock Style */}
                <div className="flex justify-center md:flex-1">
                    <div className="flex items-center gap-1 px-2 py-1.5 bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
                        <button
                            onClick={() => setDeviceMode('desktop')}
                            className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${deviceMode === 'desktop'
                                ? 'bg-white/20 text-white shadow-lg scale-110'
                                : 'text-white/50 hover:text-white hover:bg-white/10'
                                }`}
                            title={t('layout.desktop')}
                        >
                            <Monitor className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setDeviceMode('tablet')}
                            className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${deviceMode === 'tablet'
                                ? 'bg-white/20 text-white shadow-lg scale-110'
                                : 'text-white/50 hover:text-white hover:bg-white/10'
                                }`}
                            title={t('layout.tablet')}
                        >
                            <Laptop className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setDeviceMode('mobile')}
                            className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${deviceMode === 'mobile'
                                ? 'bg-white/20 text-white shadow-lg scale-110'
                                : 'text-white/50 hover:text-white hover:bg-white/10'
                                }`}
                            title={t('layout.mobile')}
                        >
                            <Smartphone className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex justify-end md:flex-1 gap-2">
                    <button
                        onClick={() => (previewTier === 'pro' && !isNewYearPromoActive()) ? setIsProModalOpen(true) : setIsPromptModalOpen(true)}
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm font-medium rounded-lg transition-colors flex-shrink-0"
                    >
                        <Copy className="w-3 h-3 md:w-4 md:h-4" />
                        {t('preview.copyPrompt') || 'Copy Prompt'}
                    </button>
                    <Link
                        href={shouldUsePro ? `/styles/${effectiveStyleId}/pro` : `/styles/${effectiveStyleId}`}
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white hover:bg-gray-100 text-black text-xs md:text-sm font-medium rounded-lg transition-colors flex-shrink-0"
                    >
                        <Maximize2 className="w-3 h-3 md:w-4 md:h-4" />
                        {t('preview.open')}
                    </Link>
                </div>
            </div>

            {/* Device Frame */}
            <div className="flex-1 min-h-0 overflow-hidden">
                <div className="relative w-full h-full min-h-0">
                    {/* Mobile Frame */}
                    <div
                        className={`
              absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center
              ${deviceMode === 'mobile' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}
                    >
                        <div
                            className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                            style={{
                                width: '375px',
                                height: '812px',
                                maxWidth: '100%',
                                maxHeight: '100%'
                            }}
                        >
                            <div className="flex-1 bg-white overflow-y-auto" style={{ transform: 'translateZ(0)' }}>
                                <SelectedComponent deviceMode={deviceMode} />
                            </div>
                        </div>
                    </div>

                    {/* Tablet Frame */}
                    <div
                        className={`
              absolute inset-0 transition-all duration-500 ease-in-out flex justify-center items-start
              ${deviceMode === 'tablet' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}
                    >
                        <div
                            className="h-full bg-white rounded-lg shadow-2xl overflow-y-auto"
                            style={{ width: '768px', maxWidth: '100%', transform: 'translateZ(0)' }}
                        >
                            <SelectedComponent deviceMode={deviceMode} />
                        </div>
                    </div>

                    {/* Desktop Frame */}
                    <div
                        className={`
              w-full h-full transition-all duration-500 ease-in-out
              ${deviceMode === 'desktop' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}
                    >
                        <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-y-auto" style={{ transform: 'translateZ(0)' }}>
                            <SelectedComponent deviceMode={deviceMode} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden mt-4 flex flex-col gap-2">
                <button
                    onClick={() => (previewTier === 'pro' && !isNewYearPromoActive()) ? setIsProModalOpen(true) : setIsPromptModalOpen(true)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <Copy className="w-4 h-4" />
                    {t('preview.copyPrompt') || 'Copy Prompt'}
                </button>
                <Link
                    href={shouldUsePro ? `/styles/${effectiveStyleId}/pro` : `/styles/${effectiveStyleId}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-lg transition-colors"
                >
                    <Maximize2 className="w-4 h-4" />
                    {t('preview.open')}
                </Link>
            </div>

            {/* Prompt Modal */}
            <PromptModal
                isOpen={isPromptModalOpen}
                onClose={() => setIsPromptModalOpen(false)}
                styleId={effectiveStyleId}
                tier={previewTier}
            />

            {/* Pro Modal */}
            <ProUpgradeModal
                isOpen={isProModalOpen}
                onClose={() => setIsProModalOpen(false)}
                styleName={currentStyle?.name || ''}
            />
        </main>
    );
};
