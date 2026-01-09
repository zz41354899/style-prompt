'use client';

import { useState, useEffect } from 'react';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

/**
 * 共用的設備模式偵測 hook
 * 統一處理視窗大小變化，避免各 Context 重複實現
 */
export const useDeviceMode = (initialMode: DeviceMode = 'desktop') => {
    const [deviceMode, setDeviceMode] = useState<DeviceMode>(initialMode);

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
        window.addEventListener('resize', updateDeviceMode, { passive: true });
        return () => window.removeEventListener('resize', updateDeviceMode);
    }, []);

    return { deviceMode, setDeviceMode };
};
