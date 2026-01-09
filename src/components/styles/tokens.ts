/**
 * 共用設計 Tokens
 * 提供統一的設計系統變數供所有風格元件使用
 */

import type { DesignTokens, SpacingTokens } from './types';

// 預設間距配置
export const createSpacing = (
    scale: 'compact' | 'default' | 'spacious' = 'default'
): SpacingTokens => {
    const multiplier = scale === 'compact' ? 0.8 : scale === 'spacious' ? 1.2 : 1;

    return {
        xs: `${Math.round(4 * multiplier)}px`,
        sm: `${Math.round(8 * multiplier)}px`,
        md: `${Math.round(16 * multiplier)}px`,
        lg: `${Math.round(24 * multiplier)}px`,
        xl: `${Math.round(48 * multiplier)}px`,
        section: `${Math.round(80 * multiplier)}px`,
    };
};

// Tech Minimal 風格 tokens (S01)
export const techMinimalTokens: DesignTokens = {
    colors: {
        bg: {
            default: '#FFFFFF',
            muted: '#F7F8FA',
            surface: '#FFFFFF',
        },
        border: '#E5E7EB',
        text: {
            primary: '#0F172A',
            secondary: '#475569',
        },
        primary: {
            base: '#2563EB',
            hover: '#1D4ED8',
        },
        accent: '#22D3EE',
        success: '#16A34A',
        danger: '#DC2626',
    },
    spacing: createSpacing('default'),
    radius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
    },
    shadow: '0 1px 2px rgba(0,0,0,0.04)',
};

// Cyberpunk 風格 tokens (S06)
export const cyberpunkTokens: DesignTokens = {
    colors: {
        bg: {
            default: '#0D0D0D',
            muted: '#1A1A2E',
            surface: '#16213E',
        },
        border: '#0F3460',
        text: {
            primary: '#E94560',
            secondary: '#00FFF5',
        },
        primary: {
            base: '#E94560',
            hover: '#FF6B8A',
        },
        accent: '#00FFF5',
        success: '#00FF88',
        danger: '#FF0055',
    },
    spacing: createSpacing('default'),
    radius: {
        sm: '0px',
        md: '4px',
        lg: '8px',
    },
    shadow: '0 0 20px rgba(233, 69, 96, 0.3)',
};

// Glassmorphism 風格 tokens (S14)
export const glassmorphismTokens: DesignTokens = {
    colors: {
        bg: {
            default: 'rgba(255, 255, 255, 0.1)',
            muted: 'rgba(255, 255, 255, 0.05)',
            surface: 'rgba(255, 255, 255, 0.15)',
        },
        border: 'rgba(255, 255, 255, 0.2)',
        text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
        primary: {
            base: 'rgba(139, 92, 246, 0.8)',
            hover: 'rgba(139, 92, 246, 1)',
        },
        accent: 'rgba(34, 211, 238, 0.8)',
        success: 'rgba(34, 197, 94, 0.8)',
        danger: 'rgba(239, 68, 68, 0.8)',
    },
    spacing: createSpacing('spacious'),
    radius: {
        sm: '12px',
        md: '16px',
        lg: '24px',
    },
    shadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
};

// Token 選擇器
export const getTokensForStyle = (styleId: string): DesignTokens => {
    const tokenMap: Record<string, DesignTokens> = {
        S01: techMinimalTokens,
        S06: cyberpunkTokens,
        S14: glassmorphismTokens,
    };

    return tokenMap[styleId] || techMinimalTokens;
};
