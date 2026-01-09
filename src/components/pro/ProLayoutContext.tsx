'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { styles, hasProVersion } from '@/data/styles';
import { usePurchase } from '@/hooks/usePurchase';

// 試用常數：免費用戶可試用的風格數量
export const TRIAL_STYLE_COUNT = 20;

// 型別定義
export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface ProLayoutContextType {
    deviceMode: DeviceMode;
    setDeviceMode: (mode: DeviceMode) => void;
    selectedStyle: string;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    handleStyleSelect: (styleId: string) => void;
    proStyles: typeof styles;
    // 試用相關
    isTrial: boolean;
    hasPro: boolean;
    trialStyles: typeof styles;
    lockedStyles: typeof styles;
    isStyleLocked: (styleId: string) => boolean;
    canCopyStyle: (styleId: string) => boolean;
    canCopyPrompt: boolean;
}

const ProLayoutContext = createContext<ProLayoutContextType | null>(null);

// 從路徑中提取 styleId
function extractProStyleId(pathname: string): string {
    // /pro/S01 -> S01
    const match = pathname.match(/\/pro\/([A-Z]\d+)/);
    if (match && hasProVersion(match[1])) return match[1];
    return 'S01';
}

// Hook 取得 Pro Layout Context
export function useProLayoutContext() {
    const context = useContext(ProLayoutContext);
    if (!context) {
        throw new Error('useProLayoutContext must be used within ProLayoutProvider');
    }
    return context;
}

// Provider 元件
interface ProLayoutProviderProps {
    children: React.ReactNode;
}

export const ProLayoutProvider: React.FC<ProLayoutProviderProps> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const { hasPro, user } = usePurchase();
    const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const selectedStyle = extractProStyleId(pathname);
    const proStyles = styles.filter(s => hasProVersion(s.id));

    // 試用模式邏輯
    const isTrial = !!user && !hasPro;
    const trialStyles = proStyles.slice(0, TRIAL_STYLE_COUNT);
    const lockedStyles = proStyles.slice(TRIAL_STYLE_COUNT);

    // 判斷特定風格是否被鎖定（對於試用用戶：無法瀏覽也無法複製）
    const isStyleLocked = (styleId: string): boolean => {
        if (hasPro) return false; // Pro/Admin 用戶不鎖定任何風格
        if (!user) return true; // 未登入用戶全部鎖定
        // 試用用戶：檢查風格是否在前 20 個之內
        const styleIndex = proStyles.findIndex(s => s.id === styleId);
        return styleIndex >= TRIAL_STYLE_COUNT;
    };

    // 判斷特定風格是否可以複製提示詞
    // - Pro/Admin 用戶：全部可複製
    // - 試用用戶：只有前 20 個可複製
    const canCopyStyle = (styleId: string): boolean => {
        if (hasPro) return true; // Pro/Admin 用戶全部可複製
        if (!user) return false; // 未登入用戶不可複製
        // 試用用戶：檢查風格是否在前 20 個之內
        const styleIndex = proStyles.findIndex(s => s.id === styleId);
        return styleIndex < TRIAL_STYLE_COUNT;
    };

    // 向下兼容：保留 canCopyPrompt（根據當前選中的風格判斷）
    const canCopyPrompt = selectedStyle ? canCopyStyle(selectedStyle) : false;

    // 視窗 resize 自動更新 deviceMode
    useEffect(() => {
        const updateDeviceMode = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setDeviceMode('mobile');
            } else if (width < 1024) {
                setDeviceMode('tablet');
            } else {
                setDeviceMode('desktop');
            }
        };

        updateDeviceMode();
        window.addEventListener('resize', updateDeviceMode);
        return () => window.removeEventListener('resize', updateDeviceMode);
    }, []);

    const handleStyleSelect = (newStyleId: string) => {
        router.push(`/pro/${newStyleId}`);
        setSidebarOpen(false);
    };

    return (
        <ProLayoutContext.Provider
            value={{
                deviceMode,
                setDeviceMode,
                selectedStyle,
                sidebarOpen,
                setSidebarOpen,
                handleStyleSelect,
                proStyles,
                // 試用相關
                isTrial,
                hasPro,
                trialStyles,
                lockedStyles,
                isStyleLocked,
                canCopyStyle,
                canCopyPrompt,
            }}
        >
            {children}
        </ProLayoutContext.Provider>
    );
};
