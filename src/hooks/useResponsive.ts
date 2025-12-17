import { useMemo } from 'react';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const useResponsive = (deviceMode?: DeviceMode) => {
  return useMemo(() => {
    const scale = deviceMode === 'mobile' ? 0.75 : deviceMode === 'tablet' ? 0.875 : 1;
    
    // 基礎間距值
    const baseSpacing = {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
      xxxl: 64,
      section: 96,
    };
    
    // 根據設備模式調整間距
    const spacing = Object.fromEntries(
      Object.entries(baseSpacing).map(([key, value]) => [
        key,
        `${Math.round(value * scale)}px`
      ])
    ) as unknown as typeof baseSpacing;
    
    // 字體大小
    const fontSize = {
      xs: `${Math.round(12 * scale)}px`,
      sm: `${Math.round(14 * scale)}px`,
      base: `${Math.round(16 * scale)}px`,
      lg: `${Math.round(18 * scale)}px`,
      xl: `${Math.round(20 * scale)}px`,
      '2xl': `${Math.round(24 * scale)}px`,
      '3xl': `${Math.round(30 * scale)}px`,
      '4xl': `${Math.round(36 * scale)}px`,
      '5xl': `${Math.round(48 * scale)}px`,
    };
    
    // 網格列數
    const gridCols = {
      features: deviceMode === 'mobile' ? 1 : deviceMode === 'tablet' ? 2 : 3,
      pricing: deviceMode === 'mobile' ? 1 : deviceMode === 'tablet' ? 2 : 3,
      metrics: deviceMode === 'mobile' ? 2 : deviceMode === 'tablet' ? 4 : 4,
      integrations: deviceMode === 'mobile' ? 2 : deviceMode === 'tablet' ? 3 : 4,
    };
    
    // 容器最大寬度
    const maxWidth = deviceMode === 'mobile' ? '100%' : deviceMode === 'tablet' ? '768px' : '1200px';
    
    // 導航顯示
    const nav = {
      showDesktop: deviceMode === 'desktop',
      showMobile: deviceMode === 'mobile' || deviceMode === 'tablet',
    };
    
    return {
      spacing,
      fontSize,
      gridCols,
      maxWidth,
      nav,
      scale,
    };
  }, [deviceMode]);
};
