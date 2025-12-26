
import { StyleDNAConfig } from './index';

export const S79_S84_Configs: Record<string, StyleDNAConfig> = {
  // S79: Corporate Clean
  S79: {
    paletteStrategy: 'Safe reliable blue tones, white background, high contrast text.',
    typography: 'Inter or Roboto, clean sans-serif, legible.',
    radiusPolicy: 'Small consistent radius (4px).',
    shadowPolicy: 'Minimal or none, flat design.',
    borderLanguage: 'Subtle light grey borders.',
    patterns: 'Clean whitespace, consistent padding.',
    motion: 'Minimal, instant, efficient.',
    dos: ['Use blue/grey', 'Be structured', 'High readability', 'Professional'],
    donts: ['Don\'t be eclectic', 'Don\'t use neon', 'Don\'t be chaotic'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S79"
    style_name: "Corporate Clean"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F4F4F4"
      secondary: "#FFFFFF"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
      muted: "#757575"
    brand:
      primary: "#0F62FE"
      accent: "#0043CE"
    border:
      strong: "#C6C6C6"
      subtle: "#E0E0E0"
    state:
      success: "#24A148"
      warning: "#F1C21B"
      error: "#DA1E28"
    focus:
      ring: "#0F62FE"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    sm: "0 1px 2px rgba(0,0,0,0.05)"
    md: "0 2px 4px rgba(0,0,0,0.08)"
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
      fast: 100
      normal: 150
    easing: "ease"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "Roboto"
          - "system-ui"
          - "sans-serif"
      mono:
        primary: "IBM Plex Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 56, weight: 600, tracking: -0.02 }
      h2: { size: 36, line: 44, weight: 600, tracking: -0.01 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },

  // S80: Startup Vibrant
  S80: {
    paletteStrategy: 'Blurple, cyan, gradients, high energy.',
    typography: 'Plus Jakarta Sans or modern geometric sans.',
    radiusPolicy: 'Full rounded pills (999px).',
    shadowPolicy: 'Soft colored shadows, elevation.',
    borderLanguage: 'None or gradient borders.',
    patterns: 'Mesh gradients, floating elements.',
    motion: 'Bouncy, smooth, playful.',
    dos: ['Use gradients', 'Rounded buttons', 'Energetic', 'Modern'],
    donts: ['Don\'t be dull', 'Don\'t be square', 'Don\'t use serif'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S80"
    style_name: "Startup Vibrant"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F9FAFB"
    text:
      primary: "#1F2937"
      secondary: "#4B5563"
      muted: "#9CA3AF"
    brand:
      primary: "#635BFF"
      accent: "#00D4FF"
    border:
      strong: "#E5E7EB"
      subtle: "#F3F4F6"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#635BFF"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    full: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    sm: "0 2px 8px rgba(99,91,255,0.1)"
    md: "0 8px 24px rgba(99,91,255,0.15)"
    glow: "0 0 40px rgba(0,212,255,0.2)"
  layout:
    container:
      content: 1200
      wide: 1400
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 32
  motion:
    duration:
      fast: 200
      normal: 400
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  typography:
    font:
      sans:
        primary: "Plus Jakarta Sans"
        fallback:
          - "Inter"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 42, line: 50, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 500, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [112, 144]
\`\`\``,
  },

  // S81: Enterprise Blue
  S81: {
    paletteStrategy: 'Navy blue, grey, information dense.',
    typography: 'Roboto or system fonts, compact.',
    radiusPolicy: 'Square or very small radius (2px).',
    shadowPolicy: 'Subtle functional shadows.',
    borderLanguage: 'hairline borders, dividers.',
    patterns: 'Data grids, dense tables.',
    motion: 'None or very fast.',
    dos: ['Information density', 'Blue header', 'Clear hierarchy', 'Trust'],
    donts: ['Don\'t use too much whitespace', 'Don\'t be playful', 'Don\'t hide data'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S81"
    style_name: "Enterprise Blue"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F0F2F5"
      secondary: "#FFFFFF"
    text:
      primary: "#1A1A2E"
      secondary: "#374151"
      muted: "#6B7280"
    brand:
      primary: "#003366"
      accent: "#0052CC"
    border:
      strong: "#CBD5E1"
      subtle: "#E2E8F0"
    state:
      success: "#059669"
      warning: "#D97706"
      error: "#DC2626"
    focus:
      ring: "#003366"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 6
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    sm: "0 1px 2px rgba(0,0,0,0.05)"
    md: "0 2px 4px rgba(0,0,0,0.08)"
  layout:
    container:
      content: 1280
      wide: 1440
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 12
      desktop: 20
  motion:
    duration:
      fast: 50
      normal: 100
    easing: "linear"
  typography:
    font:
      sans:
        primary: "Roboto"
        fallback:
          - "system-ui"
          - "sans-serif"
      mono:
        primary: "Roboto Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h2: { size: 32, line: 40, weight: 600, tracking: 0 }
      h3: { size: 24, line: 32, weight: 600, tracking: 0 }
      body: { size: 14, line: 22, weight: 400, tracking: 0 }
      small: { size: 12, line: 18, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [48, 64]
      desktop: [72, 96]
\`\`\``,
  },

  // S82: Fintech Trust
  S82: {
    paletteStrategy: 'Deep purple, growth green, navy.',
    typography: 'DM Sans, clean and modern.',
    radiusPolicy: 'Modern rounded corners (12px).',
    shadowPolicy: 'Clean sophisticated shadows.',
    borderLanguage: 'Thin light borders.',
    patterns: 'Clean cards, trust indicators.',
    motion: 'Secure, smooth transitions.',
    dos: ['Look secure', 'Use growth green', 'Clean lines', 'Trustworthy'],
    donts: ['Don\'t be risky', 'Don\'t be messy', 'Don\'t use red (unless error)'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S82"
    style_name: "Fintech Trust"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAFBFC"
      secondary: "#FFFFFF"
    text:
      primary: "#1A1A2E"
      secondary: "#4A5568"
      muted: "#718096"
    brand:
      primary: "#5A3EA8"
      accent: "#00C08B"
    border:
      strong: "#E2E8F0"
      subtle: "#EDF2F7"
    state:
      success: "#00C08B"
      warning: "#F6AD55"
      error: "#E53E3E"
    focus:
      ring: "#5A3EA8"
  radius:
    none: 0
    sm: 6
    md: 12
    lg: 16
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    sm: "0 2px 4px rgba(0,0,0,0.04)"
    md: "0 4px 12px rgba(0,0,0,0.08)"
    lg: "0 12px 32px rgba(0,0,0,0.12)"
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
    easing: "ease-out"
  typography:
    font:
      sans:
        primary: "DM Sans"
        fallback:
          - "Inter"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "monospace"
    scale:
      h1: { size: 52, line: 60, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 500, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [64, 80]
      desktop: [96, 120]
\`\`\``,
  },

  // S83: Health Medical
  S83: {
    paletteStrategy: 'Teal, white, soft grey, sterile.',
    typography: 'Lato or humanist sans.',
    radiusPolicy: 'Soft approachable radius (16px).',
    shadowPolicy: 'Very soft diffuse shadows.',
    borderLanguage: 'None or very subtle.',
    patterns: 'Clean waves, circles.',
    motion: 'Gentle, reassuring.',
    dos: ['Look clean', 'Use teal/cyan', 'Comforting', 'Professional'],
    donts: ['Don\'t be dark', 'Don\'t be sharp', 'Don\'t look dirty'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S83"
    style_name: "Health Medical"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5FCFB"
      secondary: "#FFFFFF"
    text:
      primary: "#1A3A3A"
      secondary: "#4A6A6A"
      muted: "#7A9A9A"
    brand:
      primary: "#00BFA5"
      accent: "#26C6DA"
    border:
      strong: "#B2DFDB"
      subtle: "#E0F2F1"
    state:
      success: "#00BFA5"
      warning: "#FFB74D"
      error: "#EF5350"
    focus:
      ring: "#00BFA5"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    sm: "0 2px 8px rgba(0,191,165,0.08)"
    md: "0 4px 16px rgba(0,191,165,0.1)"
  layout:
    container:
      content: 1080
      wide: 1200
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
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Lato"
        fallback:
          - "Open Sans"
          - "sans-serif"
      mono:
        primary: "Source Code Pro"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 60, weight: 700, tracking: -0.01 }
      h2: { size: 36, line: 46, weight: 600, tracking: 0 }
      h3: { size: 24, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },

  // S84: Eco Green
  S84: {
    paletteStrategy: 'Forest green, earth brown, leaf light green.',
    typography: 'Nunito or rounded sans.',
    radiusPolicy: 'Organic shapes, leaf corners.',
    shadowPolicy: 'Natural soft shadows.',
    borderLanguage: 'None or thick organic strokes.',
    patterns: 'Leaf textures, wood grain.',
    motion: 'Organic, growing, wind.',
    dos: ['Use nature colors', 'Leaf shapes', 'Sustainable vibes', 'Organic'],
    donts: ['Don\'t look plastic', 'Don\'t use industrial colors', 'Don\'t be sharp'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S84"
    style_name: "Eco Green"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F1F8E9"
      secondary: "#FFFFFF"
    text:
      primary: "#1B5E20"
      secondary: "#33691E"
      muted: "#558B2F"
    brand:
      primary: "#2E7D32"
      accent: "#8BC34A"
    secondary:
      brown: "#8D6E63"
      earth: "#6D4C41"
    border:
      strong: "#A5D6A7"
      subtle: "#C8E6C9"
    state:
      success: "#4CAF50"
      warning: "#FFB74D"
      error: "#E57373"
    focus:
      ring: "#2E7D32"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    leaf: "50% 0 50% 50%"
  border:
    width:
      hairline: 1
      medium: 2
      strong: 4
  shadow:
    sm: "0 2px 8px rgba(46,125,50,0.1)"
    md: "0 4px 16px rgba(46,125,50,0.12)"
  layout:
    container:
      content: 1080
      wide: 1200
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      desktop: 24
  motion:
    duration:
      fast: 300
      normal: 500
    easing: "ease-in-out"
  typography:
    font:
      sans:
        primary: "Nunito"
        fallback:
          - "Quicksand"
          - "sans-serif"
      mono:
        primary: "Source Code Pro"
        fallback:
          - "monospace"
    scale:
      h1: { size: 48, line: 60, weight: 700, tracking: 0 }
      h2: { size: 36, line: 46, weight: 600, tracking: 0 }
      h3: { size: 24, line: 34, weight: 600, tracking: 0 }
      body: { size: 16, line: 28, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [88, 112]
\`\`\``,
  },
};

