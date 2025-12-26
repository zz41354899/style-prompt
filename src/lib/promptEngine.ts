'use client';

import { styles, canAccessProStyle } from '../data/styles';
import { styleDNAConfigs } from '../data/styleConfigs';
import { S_Pro_Configs } from '../data/styleConfigs/S-Pro';
import type { StyleDNAConfig } from '../data/styleConfigs/types';

// 獲取 Pro 版配置
const getProConfig = (styleId: string): StyleDNAConfig | undefined => {
  const proId = styleId.endsWith('-Pro') ? styleId : `${styleId}-Pro`;
  return S_Pro_Configs[proId];
};
export type PlanTier = 'free' | 'pro';
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
  tier?: 'free' | 'pro';  // 新增 tier 參數
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
- Target stack: **Next.js + Tailwind CSS** using **CSS variables** for theming

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

// Pro 版模板 - 包含完整 Design Tokens 和區塊結構
const PRO_TEMPLATE = `# {{styleName}} Pro — Full Landing Page Design Specification ({{styleId}})

## Objective
Design and specify a **production-ready, conversion-focused Full Landing Page** for a **SaaS product** using the **{{styleId}} {{styleName}} Pro** style. This is the **advanced specification** with complete design tokens, detailed section specs, and engineering-ready output.

## Inputs
- **Style:** {{styleId}} Pro — {{styleName}}
- **Industry:** AI SaaS
- **Use:** Full Landing Page (Production-Ready)

## Baseline Principles
- **Clarity > decoration**: typography-led hierarchy, minimal color, restrained motion
- **Fast scanning**: short lines, strong headings, predictable section rhythm
- **Engineering-ready**: reusable components, tokens, states, accessibility, responsive rules

---

{{styleDNA}}

---

{{styleTokens}}

---

## Complete Section Structure

### 1. Global Navigation
- Fixed header with logo, nav links, and CTAs
- Mobile: hamburger menu with slide-in drawer
- Active link indicator with brand color

### 2. Hero Section
- Two-column layout (copy + product visual)
- H1 headline with brand accent
- Primary/Secondary CTAs with trust microcopy
- Product visual with subtle glow effect

### 3. Problem / Tension
- 3-card grid highlighting pain points
- Concise copy with icons

### 4. Value Proposition
- Benefit statements with checkmarks
- Supporting metrics panel

### 5. System Overview
- 4-step flow diagram
- Interactive module cards

### 6. Bento Grid
- Asymmetrical card layout
- Large feature card with accent border
- Code snippet card with monospace
- Monitoring card with chart placeholder

### 7. Trust & Proof
- Logo strip (monochrome)
- 3 key metrics
- Optional security badges

### 8. Integrations
- Integration logo grid
- Category labels

### 9. Use Cases
- 3 scenario cards
- Persona targeting

### 10. Pricing
- Monthly/annual toggle
- 2-3 tier comparison
- Enterprise CTA

### 11. FAQ
- Accordion component
- 5-7 common questions

### 12. Final CTA
- High-contrast block
- Primary + secondary buttons

### 13. Footer
- 4-column site map
- Legal links row
- Copyright

---

## Accessibility & Responsive
- WCAG AA contrast minimum
- Visible focus rings (2px outline)
- Reduced motion support
- Touch targets ≥ 44px
- Mobile-first responsive layout
- Keyboard accessible navigation

---

## Engineering Implementation
- CSS variables for all tokens
- Tailwind config with token mapping
- Semantic HTML5 structure
- Component-based architecture
- Loading states and error handling
- Animation using CSS transitions

---

## Acceptance Checklist
- [ ] Clear visual hierarchy
- [ ] Primary CTA above fold
- [ ] All tokens documented
- [ ] Responsive at all breakpoints
- [ ] Keyboard accessible
- [ ] Reduced motion compliant

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
    const tier = params.tier || 'free';

    // 根據 tier 選擇配置
    let dnaConfig: StyleDNAConfig | undefined;
    let template = BASE_TEMPLATE;

    if (tier === 'pro' && canAccessProStyle(params.styleId)) {
      // 使用 Pro 版配置
      dnaConfig = getProConfig(params.styleId);
      template = PRO_TEMPLATE;
    } else {
      // 使用 Free 版配置
      dnaConfig = styleDNAConfigs[params.styleId];
    }

    // 準備變數
    const variables = {
      styleId: params.styleId,
      styleName: styleData?.name || 'Unknown',
      tierLabel: tier === 'pro' ? 'Pro' : '',
      styleDNA: dnaConfig ? generateStyleDNA(params.styleId, styleData?.name || '', dnaConfig, tier) : 'DNA config missing',
      styleDoDont: dnaConfig ? generateStyleDoDont(dnaConfig) : '',
      styleTokens: dnaConfig?.tokens || '',
    };

    // 替換模板變數
    return replaceVariables(template, variables);
  } catch (error) {
    console.error('Error assembling prompt:', error);
    return 'Error generating prompt';
  }
};

// 生成 Style DNA 內容
const generateStyleDNA = (styleId: string, styleName: string, config: StyleDNAConfig, tier: 'free' | 'pro' = 'free'): string => {
  const tierLabel = tier === 'pro' ? ' Pro' : '';
  return `## Style DNA (${styleId}${tierLabel} – ${styleName})

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
  tier: 'free' | 'pro';
  category: string;
}

export const getBlockModules = (): BlockModule[] => {
  return [];
};
