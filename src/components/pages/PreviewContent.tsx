'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Info, Maximize2, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styles } from '@/data/styles';
import { styleComponents } from '@/components/styles';
import { PromptModal } from '@/components/PromptModal';

interface PreviewContentProps {
    styleId: string;
}

export const PreviewContent: React.FC<PreviewContentProps> = ({ styleId }) => {
    const { t } = useTranslation();
    const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
    const effectiveStyleId = styleId || 'S01';
    const currentStyle = styles.find(s => s.id === effectiveStyleId);

    const SelectedComponent = styleComponents[effectiveStyleId];

    // 處理複製指示詞按鈕點擊 - 所有功能免費開放
    const handleCopyPromptClick = () => {
        setIsPromptModalOpen(true);
    };


    if (!currentStyle || !SelectedComponent) {
        return (
            <main className="flex-1 bg-[#111] overflow-hidden flex items-center justify-center">
                <div className="text-white/60">{t('preview.styleNotFound')}</div>
            </main>
        );
    }

    return (
        <main className="flex-1 bg-[#111] overflow-y-auto flex flex-col p-2 md:p-4 lg:p-8 pt-6 md:pt-8 lg:pt-12 pb-48 md:pb-8">
            {/* Header Content: Info and Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 md:mb-8 flex-shrink-0">
                {/* Left: Info Text */}
                <div className="flex items-center gap-3 md:flex-1">
                    <div className="flex items-center gap-2 text-white/40 text-xs md:text-sm">
                        <Info className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="leading-tight">{t('preview.previewInfo')}</span>
                    </div>
                    {/* Style Badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 border border-white/20 rounded-full">
                        <span className="text-xs font-medium text-white/60">Free</span>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex justify-end md:flex-1 gap-2">
                    <button
                        onClick={handleCopyPromptClick}
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm font-medium rounded-lg transition-colors flex-shrink-0"
                    >
                        <Copy className="w-3 h-3 md:w-4 md:h-4" />
                        {t('preview.copyPrompt') || 'Copy Prompt'}
                    </button>
                    <Link
                        href={`/styles/${effectiveStyleId}`}
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white hover:bg-gray-100 text-black text-xs md:text-sm font-medium rounded-lg transition-colors flex-shrink-0"
                    >
                        <Maximize2 className="w-3 h-3 md:w-4 md:h-4" />
                        {t('preview.open')}
                    </Link>
                </div>
            </div>

            {/* Preview Frame - Desktop Only */}
            <div className="flex-1 min-h-[500px] mb-4 md:mb-0">
                <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-y-auto" style={{ transform: 'translateZ(0)' }}>
                    <SelectedComponent />
                </div>
            </div>

            {/* Mobile Sticky Actions */}
            <div className="lg:hidden fixed bottom-16 left-0 right-0 p-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-white/10 z-30 flex flex-col gap-2">
                <button
                    onClick={handleCopyPromptClick}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-purple-600/20 active:scale-95"
                >
                    <Copy className="w-4 h-4" />
                    {t('preview.copyPrompt') || '複製提示詞'}
                </button>
                <Link
                    href={`/styles/${effectiveStyleId}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 text-black text-sm font-bold rounded-xl transition-all active:scale-95"
                >
                    <Maximize2 className="w-4 h-4" />
                    {t('preview.open') || '開啟'}
                </Link>
            </div>

            {/* Prompt Modal */}
            <PromptModal
                isOpen={isPromptModalOpen}
                onClose={() => setIsPromptModalOpen(false)}
                styleId={effectiveStyleId}
            />
        </main>
    );
};
