'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import type { PreviewTier } from './LayoutContext';

interface TierSwitcherProps {
    previewTier: PreviewTier;
    setPreviewTier: (tier: PreviewTier) => void;
}

export const TierSwitcher: React.FC<TierSwitcherProps> = ({
    previewTier,
    setPreviewTier,
}) => {
    return (
        <div className="flex items-center gap-1 p-1 bg-white/5 rounded-xl">
            <button
                onClick={() => setPreviewTier('free')}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${previewTier === 'free'
                        ? 'bg-white/15 text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
            >
                Free
                <span className="text-white/30 text-[10px]">(100)</span>
            </button>
            <button
                onClick={() => setPreviewTier('pro')}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${previewTier === 'pro'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/10'
                    }`}
            >
                <Sparkles className="w-3 h-3" />
                Pro
                <span className="text-white/50 text-[10px]">(1-10)</span>
            </button>
        </div>
    );
};
