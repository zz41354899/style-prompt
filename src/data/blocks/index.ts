import type { PromptBlock, PlanTier, BlockSelectionResult, BlockModule } from './types';
import { authLoginBlock } from './authLogin';
import { backendArchitectureBlock } from './backendArchitecture';
import { userManagementBlock } from './userManagement';

// Export industry-use mapping utilities
export {
  industryUseMappings,
  getRecommendedUses,
  isUseValidForIndustry,
  getSupabaseScore,
  getIndustriesBySupabaseScore,
} from './industryUseMapping';
export type { IndustryUseConfig } from './industryUseMapping';

// All available blocks
export const allBlocks: Record<string, PromptBlock> = {
  'auth.login': authLoginBlock,
  'backend.architecture': backendArchitectureBlock,
  'backend.user_management': userManagementBlock,
};

// Plan tier access mapping
const planTierAccess: Record<PlanTier, PlanTier[]> = {
  'free': ['free'],
  'pro': ['free', 'pro'],
};

// Get all block metadata (for UI display)
export const getBlockModules = (): BlockModule[] => {
  return Object.values(allBlocks).map(block => ({
    id: block.id,
    title: block.title,
    description: block.description,
    tier: block.tier,
    category: block.category,
  }));
};

// Filter blocks by plan tier
export const filterBlocksByPlan = (
  selectedBlockIds: string[],
  planId: PlanTier
): BlockSelectionResult => {
  const allowedTiers = planTierAccess[planId];
  const allowedBlocks: PromptBlock[] = [];
  const deniedBlocks: { id: string; title: string; requiredTier: PlanTier }[] = [];

  for (const blockId of selectedBlockIds) {
    const block = allBlocks[blockId];
    if (!block) continue;

    if (allowedTiers.includes(block.tier)) {
      allowedBlocks.push(block);
    } else {
      deniedBlocks.push({
        id: block.id,
        title: block.title,
        requiredTier: block.tier,
      });
    }
  }

  return { allowedBlocks, deniedBlocks };
};

// Check if dependencies are satisfied
export const checkDependencies = (
  selectedBlockIds: string[]
): { satisfied: boolean; missing: string[] } => {
  const missing: string[] = [];

  for (const blockId of selectedBlockIds) {
    const block = allBlocks[blockId];
    if (!block?.dependencies) continue;

    for (const dep of block.dependencies) {
      if (!selectedBlockIds.includes(dep)) {
        missing.push(`${block.title} requires ${allBlocks[dep]?.title || dep}`);
      }
    }
  }

  return {
    satisfied: missing.length === 0,
    missing,
  };
};

// Assemble blocks prompt content
export const assembleBlocksPrompt = (
  blocks: PromptBlock[],
  industryId: string,
  useId?: string
): string => {
  if (blocks.length === 0) return '';

  const blockContents = blocks.map(block => block.render(industryId, useId));

  return `---

## Feature Blocks (Add-ons)

${blockContents.join('\n\n---\n\n')}`;
};

// Re-export types
export type { PromptBlock, PlanTier, BlockSelectionResult, BlockModule, ExtendedPromptParams, AssembleResult } from './types';
