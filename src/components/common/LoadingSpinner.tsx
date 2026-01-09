'use client';

import React from 'react';

interface LoadingSpinnerProps {
    /** 載入文字 */
    text?: string;
    /** 尺寸：sm | md | lg */
    size?: 'sm' | 'md' | 'lg';
    /** 是否全螢幕置中 */
    fullScreen?: boolean;
    /** 自訂 className */
    className?: string;
}

const sizeMap = {
    sm: { spinner: 'w-8 h-8 border-2', text: 'text-xs' },
    md: { spinner: 'w-12 h-12 border-4', text: 'text-sm' },
    lg: { spinner: 'w-16 h-16 border-4', text: 'text-base' }
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    text,
    size = 'md',
    fullScreen = false,
    className = ''
}) => {
    const { spinner, text: textSize } = sizeMap[size];

    const content = (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            <div className={`${spinner} border-purple-500/30 border-t-purple-500 rounded-full animate-spin`} />
            {text && <p className={`text-white/60 ${textSize}`}>{text}</p>}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
                {content}
            </div>
        );
    }

    return content;
};
