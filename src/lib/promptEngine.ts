import type { PromptParams, Module, StyleModule, IndustryModule, UseModule } from '../data/modules';
import { modules } from '../data/moduleData';
import { 
  filterBlocksByPlan, 
  assembleBlocksPrompt, 
  checkDependencies,
  getBlockModules,
  type PlanTier,
  type AssembleResult,
  type ExtendedPromptParams,
  type BlockModule,
} from '../data/blocks';

// Re-export PromptParams for convenience
export type { PromptParams } from '../data/modules';
export type { PlanTier, AssembleResult, ExtendedPromptParams, BlockModule };

// 基礎模板
const BASE_TEMPLATE = `# {{styleName}} {{industryName}} {{useName}} Prompt ({{styleId}})

## Objective
Design and specify a **conversion-focused {{useName}}** for a **{{industryName}} product** using the **{{styleId}} {{styleName}}** style. Output must be **engineering-ready**: tokens, layout specs, components, responsive behavior, and accessibility.

## Inputs
- **Style:** {{styleId}} — {{styleName}}
- **Industry:** {{industryName}}
- **Use:** {{useName}}

## Assumptions
- Product name placeholder: **[Automatic naming]**
- Core value prop placeholder: **[One-line Value Proposition]**
- Primary CTA: **{{primaryCTA}}** (replaceable)
- Secondary CTA: **{{secondaryCTA}}** (replaceable)
- Target audience: **{{targetAudience}}**
- No real metrics, certifications, or customer logos are claimed; all proof uses placeholders
- Target stack: **Next.js + Tailwind CSS** using **CSS variables** for theming

---

{{styleDNA}}

---

{{industryConstraints}}

---

{{useDeliverables}}

---

## Accessibility & Responsive
- WCAG AA contrast
- Visible focus rings
- Reduced motion support
- Touch targets ≥ 44px
- Mobile-first layout

---

## Engineering Notes
- CSS variables for all tokens
- Tailwind config mapping tokens
- Use semantic HTML5 elements
- Implement responsive design with mobile-first approach
- Ensure all interactive elements are keyboard accessible
- Include loading states and error handling

---

## Acceptance Checklist
- Clear hierarchy and visual discipline
- Primary CTA visible above the fold
- No fake metrics or certifications
- Trust modules included
- Fully responsive
- Accessible by keyboard

---

{{styleDoDont}}`;

// 變數替換函數
const replaceVariables = (
  template: string,
  variables: Record<string, string>
): string => {
  let result = template;
  
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  });
  
  return result;
};

// 獲取模組內容
const getModule = (type: 'styles' | 'industries' | 'uses', id: string): Module => {
  const module = modules[type][id];
  if (!module) {
    // 如果找不到模組，返回一個默認的模組
    let defaultModule: Module;
    
    if (type === 'styles') {
      defaultModule = {
        id,
        name: `Unknown Style`,
        type: 'style',
        content: `## Style Content\n\nNo content available for ${id}. Please add this module to continue.`,
        dna: `No style DNA available for ${id}`,
      } as StyleModule;
    } else if (type === 'industries') {
      defaultModule = {
        id,
        name: `Unknown Industry`,
        type: 'industry',
        content: `## Industry Content\n\nNo content available for ${id}. Please add this module to continue.`,
        considerations: `No industry considerations available for ${id}`,
      } as IndustryModule;
    } else {
      defaultModule = {
        id,
        name: `Unknown Use`,
        type: 'use',
        content: `## Use Content\n\nNo content available for ${id}. Please add this module to continue.`,
        architecture: `No architecture information available for ${id}`,
      } as UseModule;
    }
    
    return defaultModule;
  }
  return module;
};

// 組裝 Prompt 的主函數
export const assemblePrompt = (params: PromptParams): string => {
  try {
    // 獲取各模組
    const styleModule = getModule('styles', params.styleId) as StyleModule;
    const industryModule = getModule('industries', params.industryId) as IndustryModule;
    const useModule = getModule('uses', params.useId) as UseModule;
    
    // 獲取產業特定的 CTA 和目標受眾
    const industryConfig = getIndustryConfig(industryModule.id);
    
    // 準備變數
    const variables = {
      styleId: styleModule.id,
      styleName: styleModule.name,
      industryName: industryModule.name,
      useName: useModule.name,
      primaryCTA: industryConfig.primaryCTA,
      secondaryCTA: industryConfig.secondaryCTA,
      targetAudience: industryConfig.targetAudience,
      styleDNA: styleModule.dna || generateStyleDNA(styleModule),
      industryConstraints: industryModule.considerations || generateIndustryConstraints(industryModule),
      useDeliverables: useModule.architecture || generateUseDeliverables(useModule),
      styleDoDont: generateStyleDoDont(styleModule),
    };
    
    // 替換模板變數
    return replaceVariables(BASE_TEMPLATE, variables);
  } catch (error) {
    console.error('Error assembling prompt:', error);
    throw error;
  }
};

// 獲取產業配置
const getIndustryConfig = (industryId: string): { primaryCTA: string; secondaryCTA: string; targetAudience: string } => {
  const configs: Record<string, { primaryCTA: string; secondaryCTA: string; targetAudience: string }> = {
    'SaaS': { primaryCTA: 'Start free trial', secondaryCTA: 'Book a demo', targetAudience: 'B2B teams' },
    'E-commerce': { primaryCTA: 'Shop now', secondaryCTA: 'View collection', targetAudience: 'Online shoppers' },
    'Healthcare': { primaryCTA: 'Book appointment', secondaryCTA: 'Learn more', targetAudience: 'Patients and caregivers' },
    'Finance': { primaryCTA: 'Open account', secondaryCTA: 'Talk to advisor', targetAudience: 'Individual and business investors' },
    'Education': { primaryCTA: 'Enroll now', secondaryCTA: 'Explore courses', targetAudience: 'Students and professionals' },
    'RealEstate': { primaryCTA: 'View listings', secondaryCTA: 'Contact agent', targetAudience: 'Home buyers and sellers' },
    'Restaurant': { primaryCTA: 'Order online', secondaryCTA: 'Make reservation', targetAudience: 'Local diners' },
    'Travel': { primaryCTA: 'Book now', secondaryCTA: 'Explore destinations', targetAudience: 'Travelers' },
    'Fitness': { primaryCTA: 'Start free trial', secondaryCTA: 'View classes', targetAudience: 'Fitness enthusiasts' },
    'Legal': { primaryCTA: 'Free consultation', secondaryCTA: 'Learn more', targetAudience: 'Individuals and businesses' },
    'Agency': { primaryCTA: 'Start a project', secondaryCTA: 'View portfolio', targetAudience: 'Marketing directors and founders' },
    'Nonprofit': { primaryCTA: 'Donate now', secondaryCTA: 'Volunteer', targetAudience: 'Donors and volunteers' },
  };
  
  return configs[industryId] || { primaryCTA: 'Get started', secondaryCTA: 'Learn more', targetAudience: 'Target users' };
};

// 生成 Style DNA 內容
const generateStyleDNA = (styleModule: StyleModule): string => {
  return `## Style DNA (${styleModule.id} – ${styleModule.name})

### Style Seeds
${generateStyleSeeds(styleModule)}

${styleModule.content}

Tone: confident, precise, non-hype.`;
};

// 生成 Style Seeds 內容
const generateStyleSeeds = (styleModule: StyleModule): string => {
  return `### Style Seeds
- **Palette strategy:** ${styleModule.paletteStrategy}
- **Typography:** ${styleModule.typography}
- **Radius policy:** ${styleModule.radiusPolicy}
- **Shadow policy:** ${styleModule.shadowPolicy}
- **Border language:** ${styleModule.borderLanguage}
- **Patterns/textures:** ${styleModule.patterns}
- **Motion:** ${styleModule.motion}`;
};

// 生成 Industry Constraints 內容
const generateIndustryConstraints = (industryModule: IndustryModule): string => {
  return `## Industry Constraints & Trust Modules (${industryModule.name})

${industryModule.content}

Tone: confident, precise, non-hype.`;
};

// 生成 Use Deliverables 內容
const generateUseDeliverables = (useModule: UseModule): string => {
  return `## Deliverables

${useModule.content}`;
};

// 生成 Style Do/Don't 內容
const generateStyleDoDont = (styleModule: StyleModule): string => {
  return `## Do / Don't

**Do**
${styleModule.dos.map(d => `- ${d}`).join('\n')}

**Don't**
${styleModule.donts.map(d => `- ${d}`).join('\n')}`;
};

// 獲取可用的選項列表
export const getAvailableOptions = () => {
  return {
    styles: Object.values(modules.styles).map(s => ({
      id: s.id,
      name: s.name,
    })),
    industries: Object.values(modules.industries).map(i => ({
      id: i.id,
      name: i.name,
    })),
    uses: Object.values(modules.uses).map(u => ({
      id: u.id,
      name: u.name,
    })),
  };
};

// 驗證參數
export const validateParams = (params: PromptParams): boolean => {
  try {
    getModule('styles', params.styleId);
    getModule('industries', params.industryId);
    getModule('uses', params.useId);
    return true;
  } catch {
    return false;
  }
};

// ============================================
// Blocks System
// ============================================

// Get all available blocks (for UI display)
export { getBlockModules };

// Assemble prompt with blocks (extended version)
export const assemblePromptWithBlocks = (params: ExtendedPromptParams): AssembleResult => {
  try {
    // Get modules
    const styleModule = getModule('styles', params.styleId) as StyleModule;
    const industryModule = getModule('industries', params.industryId) as IndustryModule;
    const useModule = getModule('uses', params.useId) as UseModule;
    
    // Get industry-specific CTA and target audience
    const industryConfig = getIndustryConfig(industryModule.id);
    
    // Filter blocks by plan
    const { allowedBlocks, deniedBlocks } = filterBlocksByPlan(
      params.selectedBlockIds,
      params.planId
    );

    // Check dependencies
    const dependencyCheck = checkDependencies(params.selectedBlockIds);
    
    // Assemble blocks content (now includes useId for backend architecture)
    const blocksContent = assembleBlocksPrompt(allowedBlocks, params.industryId, params.useId);
    
    // Prepare variables
    const variables = {
      styleId: styleModule.id,
      styleName: styleModule.name,
      industryName: industryModule.name,
      useName: useModule.name,
      primaryCTA: industryConfig.primaryCTA,
      secondaryCTA: industryConfig.secondaryCTA,
      targetAudience: industryConfig.targetAudience,
      styleDNA: styleModule.dna || generateStyleDNA(styleModule),
      industryConstraints: industryModule.considerations || generateIndustryConstraints(industryModule),
      useDeliverables: useModule.architecture || generateUseDeliverables(useModule),
      styleDoDont: generateStyleDoDont(styleModule),
    };
    
    // Replace template variables
    let prompt = replaceVariables(BASE_TEMPLATE, variables);
    
    // Append blocks content
    if (blocksContent) {
      prompt += '\n' + blocksContent;
    }

    // Add dependency warning if needed
    if (!dependencyCheck.satisfied) {
      prompt += `\n\n---\n\n⚠️ **Dependency Warning**\n${dependencyCheck.missing.map(m => `- ${m}`).join('\n')}`;
    }
    
    return {
      prompt,
      diagnostics: {
        deniedBlocks,
        appliedBlocks: allowedBlocks.map(b => b.id),
      },
    };
  } catch (error) {
    console.error('Error assembling prompt with blocks:', error);
    throw error;
  }
};

// 驗證擴展參數
export const validateExtendedParams = (params: ExtendedPromptParams): boolean => {
  try {
    getModule('styles', params.styleId);
    getModule('industries', params.industryId);
    getModule('uses', params.useId);
    return true;
  } catch {
    return false;
  }
};
