'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check, Crown, Sparkles, Lock, Monitor, Laptop, Smartphone, Info, Loader2 } from 'lucide-react';
import { styles, hasProVersion } from '@/data/styles';
import { styleComponentsPro } from '@/components/styles';
import { getThemeColor } from '@/data/themeColors';
import { useAuth } from '@/hooks/useAuth';
import { usePurchase } from '@/hooks/usePurchase';
import { ProUpgradePrompt } from '@/components/pro';
import { PromptModal } from '@/components/PromptModal';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export default function ProEditorPage() {
    const params = useParams();
    const router = useRouter();
    const { t } = useTranslation();
    const { user, loading: authLoading } = useAuth();
    const { hasPro, loading: purchaseLoading } = usePurchase();

    const styleId = (params.styleId as string) || 'S01';
    const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
    const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
    const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);

    // 取得 Pro 風格列表
    const proStyles = styles.filter(s => hasProVersion(s.id));
    const currentStyle = styles.find(s => s.id === styleId);
    const isValidProStyle = hasProVersion(styleId);
    const themeColor = getThemeColor(styleId);
    const SelectedComponent = styleComponentsPro[styleId];

    // 未登入重導向
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/pro');
        }
    }, [authLoading, user, router]);

    // 載入中
    if (authLoading || purchaseLoading) {
        return (
            <div className="min-h-screen bg-[#030303] flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
        );
    }

    // 未登入
    if (!user) {
        return null;
    }

    // 非 Pro 風格
    if (!isValidProStyle || !SelectedComponent) {
        return (
            <div className="min-h-screen bg-[#030303] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white/60 mb-4">此風格不存在或非 Pro 風格</p>
                    <Link href="/pro" className="text-purple-400 hover:underline">返回 Pro 首頁</Link>
                </div>
            </div>
        );
    }

    // 未購買 Pro
    if (!hasPro) {
        return (
            <ProUpgradePrompt
                isOpen={true}
                onClose={() => router.push('/pro')}
                styleName={currentStyle?.name}
            />
        );
    }

    const handleCopyPrompt = () => {
        setIsPromptModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#030303] text-white flex">
            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col w-64 border-r border-white/10 bg-[#0a0a0a]">
                {/* Header */}
                <div className="p-4 border-b border-white/10">
                    <Link href="/pro" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" />
                        返回 Pro 首頁
                    </Link>
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm font-medium text-white/80">Pro 風格庫</h2>
                        <span className="px-1.5 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded flex items-center gap-1">
                            <Crown className="w-2.5 h-2.5" />
                            Pro
                        </span>
                    </div>
                    <p className="text-xs text-white/40 mt-1">{proStyles.length} 個進階風格</p>
                </div>

                {/* Style List */}
                <div className="flex-1 overflow-y-auto">
                    {proStyles.map((style) => {
                        const color = getThemeColor(style.id);
                        const isSelected = style.id === styleId;
                        return (
                            <Link
                                key={style.id}
                                href={`/pro/${style.id}`}
                                className={`block p-4 border-b border-white/5 transition-colors ${isSelected ? 'bg-purple-600/10 border-l-2 border-l-purple-500' : 'hover:bg-white/5'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                                        style={{ backgroundColor: color }}
                                    >
                                        {style.id.replace('S', '')}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-white truncate">{style.name}</div>
                                        <div className="text-xs text-white/40 truncate">{style.description}</div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0a0a0a]">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: themeColor }}
                        >
                            {styleId.replace('S', '')}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">{currentStyle?.name}</h1>
                                <span className="px-1.5 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded flex items-center gap-1">
                                    <Crown className="w-2.5 h-2.5" />
                                    Pro
                                </span>
                            </div>
                            <p className="text-xs text-white/40">{currentStyle?.description}</p>
                        </div>
                    </div>

                    {/* Device Switcher */}
                    <div className="flex items-center gap-1 px-2 py-1.5 bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl">
                        {[
                            { mode: 'desktop' as DeviceMode, icon: Monitor },
                            { mode: 'tablet' as DeviceMode, icon: Laptop },
                            { mode: 'mobile' as DeviceMode, icon: Smartphone },
                        ].map(({ mode, icon: Icon }) => (
                            <button
                                key={mode}
                                onClick={() => setDeviceMode(mode)}
                                className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all ${deviceMode === mode ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
                            >
                                <Icon className="w-4 h-4" />
                            </button>
                        ))}
                    </div>

                    {/* Actions */}
                    <button
                        onClick={handleCopyPrompt}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
                    >
                        <Copy className="w-4 h-4" />
                        複製 Pro 指示詞
                    </button>
                </header>

                {/* Preview */}
                <div className="flex-1 p-4 lg:p-8 overflow-auto">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
                        <Info className="w-3 h-3" />
                        <span>Pro 版預覽 - 包含完整設計系統指示詞</span>
                    </div>

                    <div className={`mx-auto transition-all duration-300 ${deviceMode === 'mobile' ? 'max-w-[375px]' :
                            deviceMode === 'tablet' ? 'max-w-[768px]' : 'w-full'
                        }`}>
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                            <SelectedComponent deviceMode={deviceMode} />
                        </div>
                    </div>
                </div>
            </main>

            {/* Prompt Modal */}
            <PromptModal
                isOpen={isPromptModalOpen}
                onClose={() => setIsPromptModalOpen(false)}
                styleId={styleId}
                tier="pro"
                hasPro={hasPro}
            />
        </div>
    );
}
