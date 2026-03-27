import type { StyleDNAConfig } from './types';

export const S25_S30_Configs: Record<string, StyleDNAConfig> = {
  'S25': {
    paletteStrategy: 'Vibrant startup design, energetic and modern (Inter/Blue/Green).',
    typography: 'Modern sans-serif (Inter). Clean and approachable.',
    radiusPolicy: 'Medium rounding (8-12px) for a soft tech feel.',
    shadowPolicy: 'Soft, modern elevation.',
    borderLanguage: 'Subtle borders for structural definition.',
    patterns: 'Modern geometric motifs/dots.',
    motion: 'Energetic, fast transitions (150-250ms).',
    dos: ['Use energetic accent colors', 'Keep it fast-looking', 'Use Inter font'],
    donts: ['Don\'t use dull grays', 'Don\'t use complex serifs'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S25"
    style_name: "Startup Vibrant"
    industry: "SaaS / Tech"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F3F4F6"
    brand:
      primary: "#3B82F6"
      secondary: "#10B981"
      accent: "#8B5CF6"
    text:
      primary: "#111827"
    border:
      strong: "#E5E7EB"
  radius: { sm: 4, md: 8, lg: 12 }
  shadow:
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  typography:
    font:
      sans: { primary: "Inter" }
    scale:
      h1: { size: 56, weight: 800, tracking: -0.02 }
\`\`\``,
  },
  'S26': {
    paletteStrategy: 'Deep enterprise blues and professional grays. High trust.',
    typography: 'Serious, professional sans-serif (Inter/Roboto). Clear hierarchy.',
    radiusPolicy: 'Conservative rounding (4-6px). Systematic.',
    shadowPolicy: 'Subtle, systematic elevation.',
    borderLanguage: 'Clean, thin borders (1px). Organized sections.',
    patterns: 'Subtle corporate motifs.',
    motion: 'Subtle, professional fades.',
    dos: ['Use established blue palettes', 'Prioritize readability', 'Maintain strict alignment'],
    donts: ['Don\'t use fun neons', 'Don\'t use irregular shapes'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S26"
    style_name: "Enterprise Blue"
    industry: "Corporate / Finance"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F8FAFC"
    brand:
      primary: "#0F172A"
      secondary: "#334155"
    text:
      primary: "#0F172A"
    border:
      strong: "#CBD5E1"
  radius: { sm: 4, md: 6 }
  typography:
    font:
      sans: { primary: "Inter" }
    scale:
      h1: { size: 48, weight: 700 }
\`\`\``,
  },
  'S27': {
    paletteStrategy: 'Green/Blue clean palettes focus on financial trust.',
    typography: 'Precise, technical sans-serif. Clarity-first.',
    radiusPolicy: 'Soft, safe rounding (8-12px).',
    shadowPolicy: 'Clear, modern depth.',
    borderLanguage: 'Structural dividers and grid motifs.',
    patterns: 'Abstract data visuals.',
    motion: 'Reliable, steady transitions.',
    dos: ['Focus on data clarity', 'Use safe color palettes'],
    donts: ['Don\'t use chaotic patterns'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S27"
    style_name: "Fintech Trust"
    industry: "Finance / SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F0FDFA"
    brand:
      primary: "#059669"
      secondary: "#0284C7"
    text:
      primary: "#064E3B"
  radius: { md: 12 }
  typography:
    font:
      sans: { primary: "Inter" }
    scale:
      h1: { size: 48, weight: 700 }
\`\`\``,
  },
  'S28': {
    paletteStrategy: 'Soft, candy-like pastels. 3D depth puffy clay effect.',
    typography: 'Friendly, rounded sans-serif (Nunito). Playful.',
    radiusPolicy: 'Extremely large radius (24-40px). Squircle shapes.',
    shadowPolicy: 'Inner shadows + drop shadows for 3D clay effect.',
    borderLanguage: 'None. Form defined by shadows.',
    patterns: 'None. Solid 3D forms.',
    motion: 'Squishy, elastic, bouncy animations.',
    dos: ['Use layered shadows for 3D', 'Create puffy forms', 'Use pastels'],
    donts: ['Don\'t use sharp corners', 'Don\'t use flat design'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S28"
    style_name: "Claymorphism"
    industry: "Creative / SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F3F6FD"
      secondary: "#E8EEF9"
    brand:
      primary: "#4E7CFF"
      accent: "#FF6B8B"
  radius: { lg: 32, xl: 40 }
  shadow:
    clay: "8px 8px 16px rgba(166, 180, 200, 0.5), inset -4px -4px 8px rgba(166, 180, 200, 0.3)"
  typography:
    font:
      sans: { primary: "Nunito" }
    scale:
      h1: { size: 56, weight: 800 }
\`\`\``,
  },
  'S29': {
    paletteStrategy: 'Obsidian black base with intense crimson red neon accents. Cyber-noir.',
    typography: 'Teko for headings, Michroma for body.',
    radiusPolicy: 'Zero rounded corners. Sharp chamfered polygon edges.',
    shadowPolicy: 'Intense red neon outer glows. Deep inset shadows.',
    borderLanguage: 'Thin red glowing hairlines. Light-strip effects.',
    patterns: 'Carbon fiber textures and horizontal CRT scanlines.',
    motion: 'Armor plates lifting, pulsing red core glow.',
    dos: ['Use obsidian black #050505', 'Apply crimson red glow', 'Use Teko font'],
    donts: ['Don\'t use blue/cyan neons', 'Don\'t use rounded corners'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S29"
    style_name: "Cyber-Bio Noir"
    industry: "High-Tech / Future"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#050505"
      secondary: "#020202"
    brand:
      primary: "#dc2626"
    text:
      primary: "#FFFFFF"
      accent: "#dc2626"
  radius: { none: 0 }
  shadow:
    neon: "0 0 15px rgba(220, 38, 38, 0.7)"
  typography:
    font:
      display: "Teko"
      sans: "Michroma"
      mono: "Share Tech Mono"
    scale:
      h1: { size: 96, weight: 600 }
\`\`\``,
  },
  'S30': {
    paletteStrategy: 'Dark background with large animated colorful mesh gradients.',
    typography: 'Elegant, modern sans (Syne). Large tracking.',
    radiusPolicy: 'Soft, rounded containers (32px or pill).',
    shadowPolicy: 'Subtle glass effect shadows. Colored glows from mesh.',
    borderLanguage: 'Translucent frosted glass borders.',
    patterns: 'Swirling color meshes, grainy animated gradients.',
    motion: 'Slow, continuous background color shifting.',
    dos: ['Use large gradient meshes', 'Keep foreground clean', 'Use Syne font'],
    donts: ['Don\'t use harsh lines', 'Don\'t use solid color blocks'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S30"
    style_name: "Aurora Borealis"
    industry: "Creative / SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#050510"
      mesh: "radial-gradient(at 0% 0%, #4c1d95 0px, transparent 50%)"
    text:
      primary: "#FFFFFF"
    brand:
      primary: "#34D399"
      accent: "#A78BFA"
  radius: { lg: 32, pill: 9999 }
  shadow:
    glass: "0 8px 32px 0 rgba(0,0,0,0.37)"
  typography:
    font:
      sans: { primary: "Syne" }
    scale:
      h1: { size: 64, weight: 700 }
\`\`\``,
  },
};
