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
    paletteStrategy: 'Bold primary colors. White backgrounds. Systematic palette.',
    typography: 'Roboto or similar. Clear hierarchy. Medium weights.',
    radiusPolicy: 'Consistent (4-8px). Systematic.',
    shadowPolicy: 'Elevation system. Multiple levels.',
    borderLanguage: 'Minimal borders. Rely on shadows.',
    patterns: 'None. Clean surfaces.',
    motion: 'Responsive animations. Standard curves.',
    dos: ['Use elevation and shadows', 'Follow material principles', 'Use bold colors with purpose', 'Create clear hierarchy'],
    donts: ['Don\'t use flat design', 'Don\'t ignore elevation', 'Don\'t use too many elevations', 'Don\'t break material guidelines'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S10"
    style_name: "Material 3 (Material You)"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
      surface: "#FFFFFF"
    text:
      primary: "#212121"
      secondary: "#757575"
      muted: "#9E9E9E"
    brand:
      primary: "#6200EE"
      secondary: "#03DAC6"
      accent: "#FF5722"
    border:
      strong: "#E0E0E0"
      subtle: "#F5F5F5"
    state:
      success: "#03DAC6"
      warning: "#FF5722"
      error: "#6200EE"
    focus:
      ring: "#6200EE"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    elevation1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    elevation2: "0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)"
    elevation3: "0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)"
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
      normal: 250
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans:
        primary: "Roboto"
        fallback:
          - "Inter"
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
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
  'S11': {
    paletteStrategy: 'Bold, clashing colors. Primary + pastels. High saturation.',
    typography: 'Playful, varied fonts. Mixed styles. Bold and fun.',
    radiusPolicy: 'Mixed. Geometric shapes.',
    shadowPolicy: 'Hard, offset shadows. Colorful.',
    borderLanguage: 'Thick, colorful borders. Squiggly lines.',
    patterns: 'Geometric shapes, confetti, zigzags, dots.',
    motion: 'Bouncy, playful. Exaggerated easing.',
    dos: ['Use bold, vibrant colors', 'Add geometric patterns', 'Use playful shapes', 'Create dynamic compositions'],
    donts: ['Don\'t use muted colors', 'Don\'t be too serious', 'Don\'t use traditional layouts', 'Don\'t forget the fun'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S11"
    style_name: "Memphis"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFEF0"
      secondary: "#FFE4E1"
    text:
      primary: "#1A1A1A"
      secondary: "#333333"
      muted: "#666666"
    brand:
      primary: "#FF6B6B"
      secondary: "#4ECDC4"
      accent: "#FFE66D"
    border:
      strong: "#1A1A1A"
      subtle: "#FFB6C1"
    state:
      success: "#4ECDC4"
      warning: "#FFE66D"
      error: "#FF6B6B"
    focus:
      ring: "#1A1A1A"
    palette:
      pink: "#FF6B6B"
      teal: "#4ECDC4"
      yellow: "#FFE66D"
      purple: "#A855F7"
      blue: "#3B82F6"
  radius:
    none: 0
    sm: 4
    md: 12
    lg: 20
    circle: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    hard: "6px 6px 0 #1A1A1A"
    colorful: "6px 6px 0 #FF6B6B"
  layout:
    container:
      content: 1120
      wide: 1400
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
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  typography:
    font:
      sans:
        primary: "Fredoka One"
        fallback:
          - "Baloo 2"
          - "Comic Neue"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 700, tracking: -0.005 }
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
  'S12': {
    paletteStrategy: 'High-contrast primary colors (Yellow, Blue, Red, Pink) on stark backgrounds.',
    typography: 'Bold, oversized sans-serif fonts. High contrast.',
    radiusPolicy: 'None or very subtle. Sharp corners preferred.',
    shadowPolicy: 'Hard, solid-color drop shadows with clear offsets (e.g., 4px 4px 0 #000000).',
    borderLanguage: 'Thick, solid black borders on all interactive elements and sections.',
    patterns: 'Dots, geometric shapes, raw textures, or none at all.',
    motion: 'Snappy, immediate. Minimal easing, aggressive transitions.',
    dos: ['Use thick borders', 'Apply hard offset shadows', 'Use bold, high-contrast colors', 'Prioritize raw typography'],
    donts: ['Don\'t use soft blur shadows', 'Don\'t use subtle gradients', 'Don\'t overuse rounded corners', 'Don\'t make it delicate'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S12"
    style_name: "Neo-Brutalism"
    industry: "Creative"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAD02C"
      secondary: "#FFFDBE"
    text:
      primary: "#000000"
      secondary: "#222222"
      muted: "#555555"
    brand:
      primary: "#FE4A90"
      secondary: "#333CC1"
      accent: "#FF8C00"
    border:
      strong: "#000000"
      subtle: "#111111"
    state:
      success: "#333CC1"
      warning: "#FF8C00"
      error: "#FE4A90"
    focus:
      ring: "#000000"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 4
  border:
    width:
      hairline: 2
      medium: 4
      strong: 6
  shadow:
    hard: "4px 4px 0 #000000"
    strong: "8px 8px 0 #000000"
  layout:
    container:
      content: 1120
      wide: 1400
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 100
      normal: 200
    easing: "cubic-bezier(0,0,1,1)"
  typography:
    font:
      sans:
        primary: "Space Grotesk"
        fallback:
          - "Clash Display"
          - "Inter"
          - "sans-serif"
      mono:
        primary: "Space Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 64, line: 72, weight: 800, tracking: -0.02 }
      h2: { size: 48, line: 56, weight: 800, tracking: -0.01 }
      h3: { size: 32, line: 40, weight: 700, tracking: -0.005 }
      body: { size: 18, line: 28, weight: 500, tracking: 0 }
      small: { size: 14, line: 20, weight: 500, tracking: 0 }
    measure:
      hero_max: "44ch"
      body_max: "64ch"
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 128]
\`\`\``,
  },
};
