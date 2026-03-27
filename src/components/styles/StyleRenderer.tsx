'use client';

import React, { Suspense, useState, useEffect, ComponentType } from 'react';
import type { StyleComponentProps } from './types';

interface StyleRendererProps extends StyleComponentProps {
    styleId: string;
    variant?: 'free' | 'pro';
}

/**
 * 風格元件 Renderer - 動態載入版本
 */
export const StyleRenderer: React.FC<StyleRendererProps> = ({ 
    styleId, 
    variant = 'free',
    deviceMode
}) => {
    const [Component, setComponent] = useState<ComponentType<StyleComponentProps> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        const loadComponent = async () => {
            try {
                // 動態導入 index 來避免循環引用
                const stylesModule = await import('./index');
                const componentMap = stylesModule.styleComponents;
                
                if (!cancelled) {
                    const LoadedComponent = componentMap[styleId];
                    if (LoadedComponent) {
                        setComponent(() => LoadedComponent);
                    } else {
                        setError(`風格 ${styleId} 不存在`);
                    }
                    setLoading(false);
                }
            } catch (err) {
                if (!cancelled) {
                    console.error('Failed to load style:', err);
                    setError(`載入失敗: ${styleId}`);
                    setLoading(false);
                }
            }
        };

        loadComponent();
        return () => { cancelled = true; };
    }, [styleId, variant]);

    if (loading) {
        return <StyleLoadingFallback />;
    }

    if (error || !Component) {
        return (
            <div className="flex items-center justify-center h-full bg-[#0a0a0a] text-white/40">
                {error || '載入失敗'}
            </div>
        );
    }

    return <Component deviceMode={deviceMode} />;
};

/**
 * 載入中的 Fallback UI
 */
const StyleLoadingFallback: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full bg-[#0a0a0a] gap-4">
        <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        <p className="text-white/40 text-sm">載入風格中...</p>
    </div>
);

export { StyleLoadingFallback };
