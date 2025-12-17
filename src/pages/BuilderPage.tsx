import React from 'react';
import { useParams } from 'react-router-dom';
import { PromptBuilder } from '../components/PromptBuilder';

export const BuilderPage: React.FC = () => {
  const { styleId } = useParams<{ styleId: string }>();
  
  return (
    <main className="flex-1 bg-[#0a0a0a] overflow-y-auto">
      <PromptBuilder 
        initialStyleId={styleId} 
      />
    </main>
  );
};
