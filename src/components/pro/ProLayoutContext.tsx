'use client';

import React, { createContext, useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { styles, hasProVersion } from '@/data/styles';
import { usePurchase } from '@/hooks/usePurchase';
import { useDeviceMode, type DeviceMode } from '@/hooks/useDeviceMode';

// 所有風格開放使用常數
export const TRIAL_STYLE_COUNT = 100;

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
    // 開放相關
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

    // 所有功能開放 - 不再有試用模式
    const isTrial = false;
    const trialStyles = proStyles; // 所有風格都可用
    const lockedStyles: typeof styles = []; // 沒有鎖定風格

    // 所有風格都不被鎖定
    const isStyleLocked = (_styleId: string): boolean => {
        return false;
    };

    // 所有風格都可以複製提示詞
    const canCopyStyle = (_styleId: string): boolean => {
        return true;
    };

    const canCopyPrompt = true;

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
                // 開放相關
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
