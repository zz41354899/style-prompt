/**
 * 風格元件共用類型定義
 */

// 裝置模式類型
export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

// 風格元件 Props
export interface StyleComponentProps {
    deviceMode?: DeviceMode;
}

// 設計 Token 類型定義
export interface ColorTokens {
    bg: {
        default: string;
        muted: string;
        surface: string;
    };
    border: string;
    text: {
        primary: string;
        secondary: string;
    };
    primary: {
        base: string;
        hover: string;
    };
    accent: string;
    success: string;
    danger: string;
}

export interface SpacingTokens {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    section: string;
}

export interface RadiusTokens {
    sm: string;
    md: string;
    lg: string;
}

export interface DesignTokens {
    colors: ColorTokens;
    spacing: SpacingTokens;
    radius: RadiusTokens;
    shadow: string;
}

// 響應式配置類型
export interface ResponsiveConfig {
    spacing: SpacingTokens;
    fontSize: Record<string, string>;
    gridCols: {
        features: number;
        metrics: number;
        pricing: number;
        integrations: number;
    };
    nav: {
        showDesktop: boolean;
        showMobile: boolean;
    };
}
