'use client';

import { styles } from '../data/styles';
import { styleDNAConfigs } from '../data/styleConfigs';
import type { StyleDNAConfig } from '../data/styleConfigs/types';

export type PlanTier = 'free';
export type AssembleResult = {
  prompt: string;
  diagnostics: {
    deniedBlocks: any[];
    appliedBlocks: string[];
  };
};
export type ExtendedPromptParams = PromptParams & {
  selectedBlockIds: string[];
  planId: PlanTier;
};

// Types
export interface PromptParams {
  styleId: string;
  industryId: string;
  useId: string;
}


// 基礎模板
const BASE_TEMPLATE = `# {{styleName}} SaaS Landing Page Prompt ({{styleId}})

## Objective
Design and specify a **conversion-focused Full Landing Page** for a **SaaS product** using the **{{styleId}} {{styleName}}** style. Output must be **engineering-ready**: tokens, layout specs, components, responsive behavior, and accessibility.

## Inputs
- **Style:** {{styleId}} — {{styleName}}
- **Industry:** SaaS
- **Use:** Full Landing Page

## Assumptions
- Product name placeholder: **[Automatic naming]**
- Core value prop placeholder: **[One-line Value Proposition]**
- Primary CTA: **Start free trial**
- Secondary CTA: **Book a demo**
- Target audience: **B2B teams and developers**
- No real metrics, certifications, or customer logos are claimed; all proof uses placeholders
- Target stack: **React + Next.js (App Router) + TypeScript + Tailwind CSS** using **CSS variables** for theming

---

{{styleDNA}}

---

{{styleTokens}}

---

## Deliverables
- Full hero section with high-impact product visualization
- Multi-column features grid with icon/illustration slots
- Social proof/customer logo strip (using placeholders)
- Pricing table with monthly/annual toggle
- FAQ accordion system
- Final conversion CTA module
- Responsive footer with site map

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

// 組裝 Prompt 的主函數
export const assemblePrompt = (params: PromptParams): string => {
  try {
    const styleData = styles.find(s => s.id === params.styleId);
    const dnaConfig = styleDNAConfigs[params.styleId];

    // 準備變數
    const variables = {
      styleId: params.styleId,
      styleName: styleData?.name || 'Unknown',
      styleDNA: dnaConfig ? generateStyleDNA(params.styleId, styleData?.name || '', dnaConfig) : 'DNA config missing',
      styleDoDont: dnaConfig ? generateStyleDoDont(dnaConfig) : '',
      styleTokens: dnaConfig?.tokens || '',
    };

    // 替換模板變數
    return replaceVariables(BASE_TEMPLATE, variables);
  } catch (error) {
    console.error('Error assembling prompt:', error);
    return 'Error generating prompt';
  }
};

// 生成 Style DNA 內容
const generateStyleDNA = (styleId: string, styleName: string, config: StyleDNAConfig): string => {
  return `## Style DNA (${styleId} – ${styleName})

### Style Seeds
- **Palette strategy:** ${config.paletteStrategy}
- **Typography:** ${config.typography}
- **Radius policy:** ${config.radiusPolicy}
- **Shadow policy:** ${config.shadowPolicy}
- **Border language:** ${config.borderLanguage}
- **Patterns/textures:** ${config.patterns}
- **Motion:** ${config.motion}

Tone: confident, precise, non-hype.`;
};

// 生成 Style Do/Don't 內容
const generateStyleDoDont = (config: any): string => {
  return `## Do / Don't

**Do**
${config.dos.map((d: string) => `- ${d}`).join('\n')}

**Don't**
${config.donts.map((d: string) => `- ${d}`).join('\n')}`;
};

// Assemble prompt with blocks (extended version)
export const assemblePromptWithBlocks = (params: ExtendedPromptParams): AssembleResult => {
  const prompt = assemblePrompt(params);
  return {
    prompt,
    diagnostics: {
      deniedBlocks: [],
      appliedBlocks: []
    }
  };
};

// 獲取可用的選項列表
export const getAvailableOptions = () => {
  return {
    styles: styles.map(s => ({ id: s.id, name: s.name })),
    industries: [{ id: 'SaaS', name: 'SaaS' }],
    uses: [{ id: 'FullLandingPage', name: 'Full Landing Page' }],
  };
};

export const validateParams = (params: PromptParams): boolean => true;
export const validateExtendedParams = (params: ExtendedPromptParams): boolean => true;

// Mock BlockModule type and getBlockModules since we removed the directory
export interface BlockModule {
  id: string;
  title: string;
  description: string;
  category: string;
}

export const getBlockModules = (): BlockModule[] => {
  return [];
};
