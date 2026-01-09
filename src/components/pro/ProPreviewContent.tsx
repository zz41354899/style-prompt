'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Info, Monitor, Laptop, Smartphone, Maximize2, Copy, Crown, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { styles } from '@/data/styles';
import { styleComponentsPro } from '@/components/styles';
import { useProLayoutContext, TRIAL_STYLE_COUNT } from './ProLayoutContext';
import { PromptModal } from '@/components/PromptModal';
import { ProUpgradeModal } from './ProUpgradeModal';
import { useAuth } from '@/components/providers/AuthProvider';

interface ProPreviewContentProps {
    styleId: string;
}

export const ProPreviewContent: React.FC<ProPreviewContentProps> = ({ styleId }) => {
    const { deviceMode, setDeviceMode, isTrial, hasPro, isStyleLocked, canCopyStyle, proStyles } = useProLayoutContext();
    const { t } = useTranslation();
    const { user } = useAuth();
    const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
    const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

    const effectiveStyleId = styleId || 'S01';
    const currentStyle = styles.find(s => s.id === effectiveStyleId);
    const SelectedComponent = styleComponentsPro[effectiveStyleId];

    // 判斷該風格是否被鎖定
    const styleLocked = isStyleLocked(effectiveStyleId);

    // 判斷該風格是否可以複製（前20個免費用戶可複製，Pro/Admin全部可複製）
    const canCopy = canCopyStyle(effectiveStyleId);

    const handleCopyClick = () => {
        if (!user) {
            // 未登入 - 可以提示登入
            setIsUpgradeModalOpen(true);
            return;
        }
        if (!canCopy) {
            // 該風格不可複製 - 顯示升級彈窗
            setIsUpgradeModalOpen(true);
            return;
        }
        // 可以複製 - 開啟複製彈窗
        setIsPromptModalOpen(true);
    };

    if (!currentStyle || !SelectedComponent) {
        return (
            <main className="flex-1 bg-[#111] overflow-hidden flex items-center justify-center">
                <div className="text-white/60">{t('preview.styleNotFound')}</div>
            </main>
        );
    }

    // 鎖定的風格顯示升級提示
    if (styleLocked) {
        return (
            <main className="flex-1 bg-[#111] overflow-hidden flex items-center justify-center p-8">
                <div className="max-w-md text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center border border-purple-500/30">
                        <Lock className="w-10 h-10 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                        此風格需升級 Pro
                    </h2>
                    <p className="text-white/60 mb-2">
                        {t(`styles.${effectiveStyleId}.name`) || currentStyle.name}
                    </p>
                    <p className="text-white/50 text-sm mb-6">
                        免費試用僅限前 {TRIAL_STYLE_COUNT} 個風格，升級 Pro 即可解鎖全部 {proStyles.length} 個進階風格。
                    </p>
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/dashboard/pricing"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all"
                        >
                            <Crown className="w-5 h-5" />
                            升級解鎖全部風格
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/pro/S01"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white/80 font-medium rounded-xl hover:bg-white/20 transition-all"
                        >
                            返回試用區域
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-1 bg-[#111] overflow-y-auto flex flex-col p-2 md:p-4 lg:p-8 pb-48 md:pb-8">
            {/* 試用橫幅 - 僅試用用戶顯示 */}
            {isTrial && (
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <div>
                            <span className="text-sm font-bold text-purple-300">{t('pro.trial.badge')}</span>
                            <span className="text-xs text-white/60 ml-2">
                                {t('pro.trial.info', { current: TRIAL_STYLE_COUNT, total: proStyles.length })}
                            </span>
                        </div>
                    </div>
                    <Link
                        href="/dashboard/pricing"
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-500 transition-colors flex-shrink-0"
                    >
                        {t('pro.trial.upgradeCTA')}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            )}

            {/* Header Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-3 md:mb-6 flex-shrink-0">
                {/* Left: Info + Pro Badge */}
                <div className="flex items-center gap-3 md:flex-1">
                    <div className="flex items-center gap-2 text-white/40 text-xs md:text-sm">
                        <Info className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="leading-tight">{t('preview.previewInfo')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 rounded-full">
                        <Crown className="w-3 h-3 text-purple-400" />
                        <span className="text-xs font-medium text-purple-300">{isTrial ? '試用' : 'Pro'}</span>
                    </div>
                </div>

                {/* Center: Device Switcher */}
                <div className="flex justify-center md:flex-1">
                    <div className="flex items-center gap-1 px-2 py-1.5 bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
                        {[
                            { mode: 'desktop' as const, icon: Monitor },
                            { mode: 'tablet' as const, icon: Laptop },
                            { mode: 'mobile' as const, icon: Smartphone },
                        ].map(({ mode, icon: Icon }) => (
                            <button
                                key={mode}
                                onClick={() => setDeviceMode(mode)}
                                className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${deviceMode === mode
                                    ? 'bg-white/20 text-white shadow-lg scale-110'
                                    : 'text-white/50 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex justify-end md:flex-1 gap-2">
                    <button
                        onClick={handleCopyClick}
                        className={`hidden md:flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors ${canCopy
                            ? 'bg-purple-600 hover:bg-purple-700'
                            : 'bg-purple-600/50 cursor-pointer hover:bg-purple-600/70'
                            }`}
                    >
                        {canCopy ? <Copy className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                        {canCopy ? (t('preview.copyPrompt') || 'Copy Prompt') : '需升級 Pro'}
                    </button>
                    <Link
                        href={`/styles/pro/${effectiveStyleId}`}
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-lg transition-colors"
                    >
                        <Maximize2 className="w-4 h-4" />
                        {t('preview.open')}
                    </Link>
                </div>
            </div>

            {/* Device Frame */}
            <div className="flex-1 min-h-[500px] mb-4 md:mb-0">
                <div className="relative w-full h-full min-h-[500px]">
                    {/* Mobile Frame */}
                    <div className={`absolute inset-0 transition-all duration-500 flex items-center justify-center py-4 md:py-0 ${deviceMode === 'mobile' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <div className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ width: '375px', height: '812px', maxWidth: '100%', maxHeight: '100%' }}>
                            <div className="flex-1 bg-white overflow-y-auto">
                                <SelectedComponent deviceMode={deviceMode} />
                            </div>
                        </div>
                    </div>

                    {/* Tablet Frame */}
                    <div className={`absolute inset-0 transition-all duration-500 flex justify-center items-start ${deviceMode === 'tablet' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <div className="h-full bg-white rounded-lg shadow-2xl overflow-y-auto" style={{ width: '768px', maxWidth: '100%', minHeight: '600px' }}>
                            <SelectedComponent deviceMode={deviceMode} />
                        </div>
                    </div>

                    {/* Desktop Frame */}
                    <div className={`w-full h-full transition-all duration-500 ${deviceMode === 'desktop' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-y-auto">
                            <SelectedComponent deviceMode={deviceMode} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Actions */}
            <div className="lg:hidden fixed bottom-16 left-0 right-0 p-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-white/10 z-30 flex flex-col gap-2">
                <button
                    onClick={handleCopyClick}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 text-white text-sm font-bold rounded-xl transition-all shadow-lg ${canCopy
                        ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/20'
                        : 'bg-purple-600/50'
                        }`}
                >
                    {canCopy ? <Copy className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                    {canCopy ? (t('preview.copyPrompt') || '複製提示詞') : '需購買 Pro 才能複製'}
                </button>
                <Link
                    href={`/styles/pro/${effectiveStyleId}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 text-black text-sm font-bold rounded-xl transition-all"
                >
                    <Maximize2 className="w-4 h-4" />
                    {t('preview.open') || '開啟'}
                </Link>
            </div>

            {/* Prompt Modal - 只有已購買才會開啟 */}
            <PromptModal
                isOpen={isPromptModalOpen}
                onClose={() => setIsPromptModalOpen(false)}
                styleId={effectiveStyleId}
                tier="pro"
                hasPro={true}
            />

            {/* Upgrade Modal - 未登入或未購買時顯示 */}
            <ProUpgradeModal
                isOpen={isUpgradeModalOpen}
                onClose={() => setIsUpgradeModalOpen(false)}
                styleName={currentStyle.name}
            />
        </main>
    );
};
