'use client';

import React from 'react';
import { PromptBuilder } from '@/components/PromptBuilder';

interface BuilderContentProps {
  initialStyleId?: string;
}

export const BuilderContent: React.FC<BuilderContentProps> = ({ initialStyleId }) => {
  return (
    <main className="flex-1 bg-[#0a0a0a] overflow-y-auto">
      <PromptBuilder initialStyleId={initialStyleId} />
    </main>
  );
};
