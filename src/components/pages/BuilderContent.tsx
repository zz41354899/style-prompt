'use client';

import React from 'react';
import { PromptBuilder } from '@/components/PromptBuilder';

interface BuilderContentProps {
    initialStyleId?: string;
}

export const BuilderContent: React.FC<BuilderContentProps> = ({ initialStyleId }) => {
    return <PromptBuilder initialStyleId={initialStyleId} />;
};
