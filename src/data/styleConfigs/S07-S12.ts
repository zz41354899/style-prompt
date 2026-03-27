import type { StyleDNAConfig } from './types';

export const S07_S12_Configs: Record<string, StyleDNAConfig> = {
  'S07': {
    paletteStrategy: 'Translucent colors. Gradient backgrounds. Frosted effects.',
    typography: 'Modern sans-serif. Clean and readable.',
    radiusPolicy: 'Large radius (16-24px). Soft, pill shapes.',
    shadowPolicy: 'Soft, diffused shadows. Layered depth.',
    borderLanguage: 'Subtle, light borders. Frosted edges.',
    patterns: 'Gradient blurs. Layered transparencies.',
    motion: 'Smooth animations. Parallax effects.',
    dos: ['Use frosted glass effects', 'Add subtle transparency', 'Create depth with layers', 'Use soft shadows'],
    donts: ['Don\'t use opaque backgrounds', 'Don\'t forget the blur effect', 'Don\'t use harsh edges', 'Don\'t overuse the effect'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S07"
    style_name: "Glassmorphism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "rgba(255,255,255,0.7)"
      secondary: "rgba(255,255,255,0.5)"
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    text:
      primary: "#1A1A2E"
      secondary: "#4A4A4A"
      muted: "#8A8AA0"
    brand:
      primary: "#667eea"
      accent: "#764ba2"
    border:
      strong: "rgba(255,255,255,0.3)"
      subtle: "rgba(255,255,255,0.1)"
    state:
      success: "#667eea"
      warning: "#764ba2"
      error: "#1A1A2E"
    focus:
      ring: "#667eea"
  radius:
    none: 0
    sm: 12
    md: 20
    lg: 28
    pill: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glass: "0 8px 32px rgba(0,0,0,0.1)"
    soft: "0 4px 16px rgba(0,0,0,0.08)"
  blur:
    glass: "blur(10px)"
    strong: "blur(20px)"
  layout:
    container:
      content: 1120
      wide: 1280
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 200
      normal: 400
    easing: ease-out
  typography:
    font:
      sans:
        primary: "SF Pro Display"
        fallback:
          - "Inter"
          - "system-ui"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
  'S08': {
    paletteStrategy: 'Dark mode with cyan/purple accents. High contrast for readability. Subtle gradients for depth.',
    typography: 'Clean monospace for tech feel. Mixed with sans-serif for readability. Consistent spacing.',
    radiusPolicy: 'Minimal (4-8px). Tech aesthetic with slight softening.',
    shadowPolicy: 'Glow effects and subtle elevation. Colored shadows for tech feel.',
    borderLanguage: 'Thin borders with tech feel. Cyan/purple accents.',
    patterns: 'Grid patterns. Subtle tech textures.',
    motion: 'Fast, responsive animations (150-200ms). Tech feel.',
    dos: ['Use high contrast for readability', 'Add subtle cyan/purple accents', 'Create depth with shadows', 'Use clean typography'],
    donts: ['Don\'t use low contrast text', 'Don\'t ignore accessibility', 'Don\'t overdo the effects', 'Don\'t break the elegance'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S08"
    style_name: "Dark Mode Elegance"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#000000"
      secondary: "#141414"
      gradient: "linear-gradient(135deg, #000000 0%, #1A1A1A 100%)"
    text:
      primary: "#FFFFFF"
      secondary: "#CCCCCC"
      muted: "#888888"
    brand:
      primary: "#00D9FF"
      secondary: "#7C3AED"
      accent: "#10B981"
    border:
      strong: "#333333"
      subtle: "#1A1A1A"
      accent: "#00D9FF"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#00D9FF"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    glow: "0 0 20px rgba(0, 217, 255, 0.5)"
    elevation: "0 4px 16px rgba(0,0,0,0.3)"
    colored: "0 4px 16px rgba(0, 217, 255, 0.2)"
  layout:
    container:
      content: 1100
      wide: 1260
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 14
      desktop: 20
  motion:
    duration:
      fast: 150
      normal: 200
      slow: 300
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "SF Pro Display"
          - "system-ui"
          - "-apple-system"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "SF Mono"
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 700, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
    measure:
      hero_max: "48ch"
      body_max: "72ch"
  spacing:
    base: 8
    section_py:
      mobile: [80, 96]
      desktop: [128, 144]
\`\`\``,
  },
  'S09': {
    paletteStrategy: 'Clean, professional palette. Deep blues, crisp whites, and trustworthy accents.',
    typography: 'Highly readable sans-serif (e.g., Inter, Roboto). Clear hierarchy for corporate trust.',
    radiusPolicy: 'Conservative rounding (4-6px). Sharp enough for professionalism, soft enough for modern tech.',
    shadowPolicy: 'Subtle, professional elevation. No heavy glows.',
    borderLanguage: 'Refined, thin gray borders to define structure.',
    patterns: 'None or extremely subtle geometric backgrounds.',
    motion: 'Polished, standard easing (ease-in-out). Professional delivery.',
    dos: ['Use whitespace effectively', 'Keep palette professional (Blue/Gray/White)', 'Ensure high legibility', 'Use standard layouts'],
    donts: ['Don\'t use playful/clashing colors', 'Don\'t use rounded corners excessively', 'Don\'t use decorative fonts', 'Don\'t over-animate'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S09"
    style_name: "Corporate Clean"
    industry: "Enterprise SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F9FAFB"
    text:
      primary: "#111827"
      secondary: "#374151"
      muted: "#6B7280"
    brand:
      primary: "#1E40AF"
      accent: "#3B82F6"
    border:
      strong: "#D1D5DB"
      subtle: "#F3F4F6"
    state:
      success: "#059669"
      warning: "#D97706"
      error: "#DC2626"
    focus:
      ring: "#2563EB"
  radius:
    none: 0
    sm: 4
    md: 6
    lg: 8
  border:
    width:
      hairline: 1
      medium: 1
      strong: 2
  shadow:
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  layout:
    container:
      content: 1120
      wide: 1280
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 150
      normal: 300
    easing: ease-in-out
  typography:
    font:
      sans:
        primary: "Inter"
        fallback: ["system-ui", "sans-serif"]
      mono:
        primary: "JetBrains Mono"
        fallback: ["monospace"]
    scale:
      h1: { size: 48, line: 56, weight: 700, tracking: -0.02 }
      h2: { size: 36, line: 44, weight: 700, tracking: -0.01 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [96, 128]
\`\`\``,
  },
  'S10': {
    paletteStrategy: 'High-saturation primary colors (Pink, Yellow, Cyan, Lime) paired with stark white and thick black.',
    typography: 'Bold, playful sans-serifs (Montserrat, Fredoka). Irregular alignments and heavy weights.',
    radiusPolicy: 'Mixed geometry. Perfect circles next to sharp absolute-zero corners.',
    shadowPolicy: 'Hard Offset shadows. Solid black displaced by 8px without any blur.',
    borderLanguage: 'Extremely thick black borders (4px-6px) on all containers.',
    patterns: 'Confetti patterns: floating black dots, zigzags, wavy lines, and geometric shapes.',
    motion: 'Bouncy, playful transitions (300ms-500ms). Exaggerated pop effects.',
    dos: ['Use thick black outlines', 'Apply hard offset shadows', 'Mix primary colors', 'Add floating background shapes'],
    donts: ['Don\'t use soft gradients', 'Don\'t follow a strict grid', 'Don\'t use delicate fonts', 'Don\'t make it too minimal'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S10"
    style_name: "Memphis"
    industry: "Creative SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FFB0E0"
    text:
      primary: "#000000"
      secondary: "#222222"
      muted: "#666666"
    brand:
      primary: "#FF61D2"
      secondary: "#FFE100"
      accent: "#00F0FF"
    border:
      strong: "#000000"
      subtle: "rgba(0,0,0,0.1)"
    focus:
      ring: "#FF61D2"
  radius:
    none: 0
    full: 9999
  border:
    width: { hairline: 2, medium: 4, strong: 6 }
  shadow:
    hard: "8px 8px 0 #000000"
  layout:
    container: { content: 1120, wide: 1280 }
  motion:
    duration: { fast: 150, normal: 300, bouncy: 500 }
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  typography:
    font:
      sans: { primary: "Montserrat", fallback: ["Fredoka", "sans-serif"] }
    scale:
      h1: { size: 84, line: 90, weight: 900, tracking: -0.05 }
      h2: { size: 56, line: 64, weight: 900, tracking: -0.02 }
      body: { size: 18, line: 28, weight: 500, tracking: 0 }
  spacing:
    base: 10
    section_py: { mobile: [80, 100], desktop: [120, 160] }
\`\`\``,
  },
  'S11': {
    paletteStrategy: 'High contrast, vibrant colors. Stark black and white base with bold primary accents.',
    typography: 'Bold, oversized sans-serif (Lexend, Archivo). Strong character.',
    radiusPolicy: 'Zero or very minimal (0-4px). Hard edges.',
    shadowPolicy: 'Hard, offset black shadows (no blur). Deep contrast.',
    borderLanguage: 'Thick black borders (4-8px). High visibility.',
    patterns: 'None. Pure solid colors.',
    motion: 'Instant or very fast linear transitions.',
    dos: ['Use thick black borders', 'Apply hard offset shadows', 'Use vibrant colors', 'Oversize the typography'],
    donts: ['Don\'t use soft gradients', 'Don\'t use rounded corners', 'Don\'t use subtle colors', 'Don\'t use thin fonts'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S11"
    style_name: "Neo-Brutalism"
    industry: "Creative Tech"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F3F3F3"
    text:
      primary: "#000000"
      secondary: "#000000"
      muted: "#555555"
    brand:
      primary: "#A3E635"
      secondary: "#818CF8"
      accent: "#FB7185"
    border:
      strong: "#000000"
      subtle: "#000000"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 2
    md: 4
  border:
    width: { hairline: 2, medium: 4, strong: 6 }
  shadow:
    hard: "4px 4px 0 #000000"
    extreme: "8px 8px 0 #000000"
  layout:
    container: { content: 1120, wide: 1280 }
  motion:
    duration: { fast: 100, normal: 200 }
    easing: "linear"
  typography:
    font:
      sans: { primary: "Lexend", fallback: ["Archivo", "system-ui", "sans-serif"] }
    scale:
      h1: { size: 60, line: 64, weight: 800, tracking: -0.04 }
      h2: { size: 44, line: 48, weight: 800, tracking: -0.02 }
      body: { size: 18, line: 26, weight: 500, tracking: 0 }
  spacing:
    base: 8
    section_py: { mobile: [64, 80], desktop: [112, 128] }
\`\`\``,
  },
  'S12': {
    paletteStrategy: 'Clean, neutral base with playful accents. Hand-drawn feel.',
    typography: 'Clean sans-serif mixed with sketch-style fonts (Indie Flower). Approachable.',
    radiusPolicy: 'Soft, irregular (12-20px). Natural feel.',
    shadowPolicy: 'Subtle, soft diffused shadows.',
    borderLanguage: 'Irregular, hand-drawn lines. Squiggly aesthetics.',
    patterns: 'Doodle-style patterns, squiggles, stars, and hand-drawn icons.',
    motion: 'Playful, bouncing animations (300-500ms).',
    dos: ['Use hand-drawn elements', 'Maintain playful tone', 'Use irregular borders', 'Add whimsical touches'],
    donts: ['Don\'t be too corporate', 'Don\'t use straight lines', 'Don\'t over-animate', 'Don\'t use cold colors'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S12"
    style_name: "Doodle Sketch"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FFFBEB"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
      muted: "#9CA3AF"
    brand:
      primary: "#F59E0B"
      accent: "#EC4899"
    border:
      strong: "#1A1A1A"
      subtle: "rgba(0,0,0,0.1)"
    focus:
      ring: "#F59E0B"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    irregular: "255px 15px 225px 15px/15px 225px 15px 255px"
  border:
    width: { hairline: 1, medium: 2, strong: 3 }
  shadow:
    soft: "0 4px 14px 0 rgba(0,0,0,0.05)"
  layout:
    container: { content: 1100, wide: 1200 }
  motion:
    duration: { fast: 200, normal: 400 }
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  typography:
    font:
      sans: { primary: "Indie Flower", fallback: ["Quicksand", "sans-serif"] }
    scale:
      h1: { size: 56, line: 64, weight: 400, tracking: 0.02 }
      h2: { size: 40, line: 48, weight: 400, tracking: 0.01 }
      body: { size: 18, line: 28, weight: 400, tracking: 0 }
  spacing:
    base: 10
    section_py: { mobile: [80, 100], desktop: [120, 160] }
\`\`\``,
  },
};
