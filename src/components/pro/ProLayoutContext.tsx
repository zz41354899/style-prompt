'use client';

import React, { createContext, useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { styles, hasProVersion } from '@/data/styles';
import { usePurchase } from '@/hooks/usePurchase';
import { useDeviceMode, type DeviceMode } from '@/hooks/useDeviceMode';

// 試用常數：免費用戶可試用的風格數量
export const TRIAL_STYLE_COUNT = 20;

// Re-export type
export type { DeviceMode } from '@/hooks/useDeviceMode';

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
    const { deviceMode, setDeviceMode } = useDeviceMode();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const selectedStyle = extractProStyleId(pathname);
    const proStyles = styles.filter(s => hasProVersion(s.id));

    // 試用模式邏輯
    const isTrial = !!user && !hasPro;
    const trialStyles = proStyles.slice(0, TRIAL_STYLE_COUNT);
    const lockedStyles = proStyles.slice(TRIAL_STYLE_COUNT);

    // 判斷特定風格是否被鎖定
    const isStyleLocked = (styleId: string): boolean => {
        if (hasPro) return false;
        if (!user) return true;
        const styleIndex = proStyles.findIndex(s => s.id === styleId);
        return styleIndex >= TRIAL_STYLE_COUNT;
    };

    // 判斷特定風格是否可以複製提示詞
    const canCopyStyle = (styleId: string): boolean => {
        if (hasPro) return true;
        if (!user) return false;
        const styleIndex = proStyles.findIndex(s => s.id === styleId);
        return styleIndex < TRIAL_STYLE_COUNT;
    };

    const canCopyPrompt = selectedStyle ? canCopyStyle(selectedStyle) : false;

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
