import type { PromptParams, Module, StyleModule, IndustryModule, UseModule } from '../data/modules';
import { modules } from '../data/moduleData';

// Re-export PromptParams for convenience
export type { PromptParams } from '../data/modules';

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
- **Palette strategy:** Defined by ${styleModule.name} aesthetic
- **Typography:** Appropriate fonts for ${styleModule.name} style
- **Radius policy:** Varies by style
- **Shadow policy:** Varies by style
- **Border language:** Varies by style
- **Patterns/textures:** Varies by style
- **Motion:** Varies by style`;
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
  const doDontMap: Record<string, { dos: string[]; donts: string[] }> = {
    'Tech Minimal': {
      dos: ['Use clean lines and ample whitespace', 'Keep typography simple and readable', 'Use subtle animations', 'Maintain consistent spacing'],
      donts: ['Don\'t use excessive decorations', 'Don\'t overcrowd the layout', 'Don\'t use too many colors', 'Don\'t use heavy shadows'],
    },
    'Minimalist Monochrome': {
      dos: ['Use strong black and white contrast', 'Emphasize typography hierarchy', 'Use bold editorial layouts', 'Keep imagery minimal'],
      donts: ['Don\'t use colors unless intentional', 'Don\'t add unnecessary elements', 'Don\'t use rounded corners excessively', 'Don\'t use playful animations'],
    },
    'Mondrian / De Stijl': {
      dos: ['Use primary colors (red, blue, yellow)', 'Create grid-based compositions', 'Use thick black lines', 'Keep shapes geometric'],
      donts: ['Don\'t use gradients', 'Don\'t use curves or organic shapes', 'Don\'t mix too many colors', 'Don\'t break the grid'],
    },
    'Swiss / International Typographic': {
      dos: ['Use grid systems rigorously', 'Emphasize sans-serif typography', 'Use asymmetric layouts', 'Keep design clean and functional'],
      donts: ['Don\'t use decorative fonts', 'Don\'t ignore the grid', 'Don\'t use excessive imagery', 'Don\'t add unnecessary ornamentation'],
    },
    'Brutalist': {
      dos: ['Use raw, unpolished aesthetics', 'Embrace bold typography', 'Use high contrast', 'Be intentionally unconventional'],
      donts: ['Don\'t over-polish the design', 'Don\'t use subtle effects', 'Don\'t follow conventional layouts', 'Don\'t use soft colors'],
    },
    'Cyberpunk': {
      dos: ['Use neon colors on dark backgrounds', 'Add glitch effects sparingly', 'Use futuristic typography', 'Create depth with layers'],
      donts: ['Don\'t use warm, natural colors', 'Don\'t use traditional layouts', 'Don\'t make it too clean', 'Don\'t forget the tech aesthetic'],
    },
    'Retro 80s (Synthwave)': {
      dos: ['Use gradient neons (pink, purple, cyan)', 'Add grid patterns', 'Use retro-futuristic imagery', 'Create depth with perspective'],
      donts: ['Don\'t use flat colors', 'Don\'t use modern minimalism', 'Don\'t forget the sunset gradients', 'Don\'t use serif fonts'],
    },
    'Retro 60s–70s (Print Grain)': {
      dos: ['Use warm, muted colors', 'Add grain textures', 'Use vintage typography', 'Create organic compositions'],
      donts: ['Don\'t use sharp, digital aesthetics', 'Don\'t use neon colors', 'Don\'t make it too clean', 'Don\'t forget the texture'],
    },
    'Memphis': {
      dos: ['Use bold, vibrant colors', 'Add geometric patterns', 'Use playful shapes', 'Create dynamic compositions'],
      donts: ['Don\'t use muted colors', 'Don\'t be too serious', 'Don\'t use traditional layouts', 'Don\'t forget the fun'],
    },
    'Luxury Editorial': {
      dos: ['Use elegant serif typography', 'Create generous whitespace', 'Use high-quality imagery', 'Maintain refined aesthetics'],
      donts: ['Don\'t use playful elements', 'Don\'t overcrowd layouts', 'Don\'t use bright colors', 'Don\'t use casual fonts'],
    },
    'Japanese Minimal': {
      dos: ['Embrace whitespace (ma)', 'Use subtle, natural colors', 'Create balance and harmony', 'Use delicate typography'],
      donts: ['Don\'t overcrowd the design', 'Don\'t use bold, loud colors', 'Don\'t add unnecessary elements', 'Don\'t break the zen'],
    },
    'Nature Organic': {
      dos: ['Use earth tones and natural colors', 'Add organic shapes and curves', 'Use natural textures', 'Create flowing layouts'],
      donts: ['Don\'t use harsh geometric shapes', 'Don\'t use artificial colors', 'Don\'t make it too rigid', 'Don\'t forget the organic feel'],
    },
    'Material-ish': {
      dos: ['Use elevation and shadows', 'Follow material principles', 'Use bold colors with purpose', 'Create clear hierarchy'],
      donts: ['Don\'t use flat design', 'Don\'t ignore elevation', 'Don\'t use too many elevations', 'Don\'t break material guidelines'],
    },
    'Glassmorphism': {
      dos: ['Use frosted glass effects', 'Add subtle transparency', 'Create depth with layers', 'Use soft shadows'],
      donts: ['Don\'t use opaque backgrounds', 'Don\'t forget the blur effect', 'Don\'t use harsh edges', 'Don\'t overuse the effect'],
    },
    'Neumorphism': {
      dos: ['Use soft shadows for depth', 'Create embossed/debossed effects', 'Use monochromatic colors', 'Keep it subtle'],
      donts: ['Don\'t use high contrast', 'Don\'t use flat design', 'Don\'t use too many colors', 'Don\'t forget accessibility'],
    },
    'Terminal / Hacker': {
      dos: ['Use monospace typography', 'Use green/amber on black', 'Add terminal-like elements', 'Create a tech atmosphere'],
      donts: ['Don\'t use colorful palettes', 'Don\'t use rounded corners', 'Don\'t use images heavily', 'Don\'t break the terminal aesthetic'],
    },
    'Bauhaus Modernism': {
      dos: ['Use bold geometry and rules', 'Keep copy concise', 'Treat layout like a poster', 'Accessibility of text must be considered'],
      donts: ['Don\'t use gradients or glassmorphism', 'Don\'t over-animate', 'Don\'t round everything', 'Don\'t make the button text white'],
    },
    'Retro Pixel UI': {
      dos: ['Use pixel-perfect grids', 'Add dither patterns', 'Use 8-bit color palettes', 'Create nostalgic interfaces'],
      donts: ['Don\'t use smooth gradients', 'Don\'t use high-resolution imagery', 'Don\'t use modern effects', 'Don\'t forget the pixel aesthetic'],
    },
  };

  const config = doDontMap[styleModule.name] || {
    dos: ['Follow the style guidelines', 'Maintain consistency', 'Consider accessibility', 'Keep it user-friendly'],
    donts: ['Don\'t break the style', 'Don\'t ignore usability', 'Don\'t overcomplicate', 'Don\'t forget the user'],
  };

  return `## Do / Don't

**Do**
${config.dos.map(d => `- ${d}`).join('\n')}

**Don't**
${config.donts.map(d => `- ${d}`).join('\n')}`;
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
