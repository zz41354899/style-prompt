'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { styles, hasProVersion } from '@/data/styles';

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
    const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const selectedStyle = extractProStyleId(pathname);
    const proStyles = styles.filter(s => hasProVersion(s.id));

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
            }}
        >
            {children}
        </ProLayoutContext.Provider>
    );
};
