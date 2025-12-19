// Block System Type Definitions

export type PlanTier = 'free' | 'pro';

export interface PromptBlock {
  id: string;
  title: string;
  description: string;
  tier: PlanTier;
  category: 'auth' | 'admin' | 'security' | 'billing' | 'backend';
  dependencies?: string[];
  // Returns prompt content based on industry ID and optionally use ID
  render: (industryId: string, useId?: string) => string;
}

export interface BlockModule {
  id: string;
  title: string;
  description: string;
  tier: PlanTier;
  category: string;
}

// Block Selection Result
export interface BlockSelectionResult {
  allowedBlocks: PromptBlock[];
  deniedBlocks: { id: string; title: string; requiredTier: PlanTier }[];
}

// Extended PromptParams
export interface ExtendedPromptParams {
  styleId: string;
  industryId: string;
  useId: string;
  planId: PlanTier;
  selectedBlockIds: string[];
}

// Assembly Result (includes diagnostics)
export interface AssembleResult {
  prompt: string;
  diagnostics: {
    deniedBlocks: { id: string; title: string; requiredTier: PlanTier }[];
    appliedBlocks: string[];
  };
}
