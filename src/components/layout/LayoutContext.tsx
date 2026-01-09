'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { hasProVersion } from '@/data/styles';
import { useDeviceMode, type DeviceMode } from '@/hooks/useDeviceMode';

// Re-export type
export type { DeviceMode } from '@/hooks/useDeviceMode';
export type PreviewTier = 'free' | 'pro';

export interface LayoutContextType {
    deviceMode: DeviceMode;
    setDeviceMode: (mode: DeviceMode) => void;
    selectedStyle: string;
    previewTier: PreviewTier;
    setPreviewTier: (tier: PreviewTier) => void;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    handleStyleSelect: (styleId: string) => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

// 從路徑中提取 styleId
export function extractStyleId(pathname: string): string {
    // /builder/S01 -> S01
    // /S01 -> S01
    // / -> S01
    const builderMatch = pathname.match(/^\/builder\/([A-Z]\d+)/);
    if (builderMatch) return builderMatch[1];

    const styleMatch = pathname.match(/^\/([A-Z]\d+)/);
    if (styleMatch) return styleMatch[1];

    return 'S01';
}

// Hook 取得 Layout Context
export function useLayoutContext() {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayoutContext must be used within LayoutProvider');
    }
    return context;
}

// Provider 元件
interface LayoutProviderProps {
    children: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const { deviceMode, setDeviceMode } = useDeviceMode();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [previewTier, setPreviewTier] = useState<PreviewTier>('free');

    const selectedStyle = extractStyleId(pathname);

    // Update previewTier when selectedStyle changes
    useEffect(() => {
        if (previewTier === 'pro' && !hasProVersion(selectedStyle)) {
            setPreviewTier('free');
        }
    }, [selectedStyle, previewTier]);

    const handleStyleSelect = (newStyleId: string) => {
        router.push(`/${newStyleId}`);
    };

    return (
        <LayoutContext.Provider
            value={{
                deviceMode,
                setDeviceMode,
                selectedStyle,
                previewTier,
                setPreviewTier,
                sidebarOpen,
                setSidebarOpen,
                handleStyleSelect,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
};
