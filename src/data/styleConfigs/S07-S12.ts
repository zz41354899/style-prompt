import type { StyleDNAConfig } from './types';

export const S07_S12_Configs: Record<string, StyleDNAConfig> = {
  'S07': {
    paletteStrategy: 'Gradient neons (pink, purple, cyan). Sunset palettes. Dark backgrounds.',
    typography: 'Retro-futuristic fonts. Chrome effects. Outlined text.',
    radiusPolicy: 'Rounded (8-16px). Soft edges.',
    shadowPolicy: 'Neon glows. Gradient shadows.',
    borderLanguage: 'Glowing outlines. Gradient borders.',
    patterns: 'Perspective grids. Sun/horizon imagery.',
    motion: 'Smooth, flowing. Pulsing glows.',
    dos: ['Use gradient neons (pink, purple, cyan)', 'Add grid patterns', 'Use retro-futuristic imagery', 'Create depth with perspective'],
    donts: ['Don\'t use flat colors', 'Don\'t use modern minimalism', 'Don\'t forget the sunset gradients', 'Don\'t use serif fonts'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S07"
    style_name: "Retro 80s (Synthwave)"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#1A0A2E"
      secondary: "#16082A"
    text:
      primary: "#FFFFFF"
      secondary: "#FF6AD5"
      muted: "#9D8CFF"
    brand:
      primary: "#FF6AD5"
      secondary: "#C774E8"
      accent: "#00D4FF"
    border:
      strong: "#FF6AD5"
      subtle: "#4A2C6A"
    state:
      success: "#00D4FF"
      warning: "#FF6AD5"
      error: "#C774E8"
    focus:
      ring: "#00D4FF"
    gradient:
      sunset: "linear-gradient(180deg, #FF6AD5 0%, #C774E8 50%, #00D4FF 100%)"
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
    glow: "0 0 30px rgba(255,106,213,0.5)"
    neon: "0 0 20px #FF6AD5"
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
      fast: 200
      normal: 400
    easing: ease-in-out
  typography:
    font:
      sans:
        primary: "Outrun Future"
        fallback:
          - "Audiowide"
          - "Orbitron"
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
  'S08': {
    paletteStrategy: 'Warm, muted colors. Earthy tones. Vintage palette.',
    typography: 'Vintage display fonts. Rounded sans-serif. Varied weights.',
    radiusPolicy: 'Rounded (8-16px). Organic feel.',
    shadowPolicy: 'Subtle or none. Rely on texture.',
    borderLanguage: 'Soft borders. Rounded shapes.',
    patterns: 'Paper grain, halftone dots, vintage textures.',
    motion: 'Gentle, organic movements.',
    dos: ['Use warm, muted colors', 'Add grain textures', 'Use vintage typography', 'Create organic compositions'],
    donts: ['Don\'t use sharp, digital aesthetics', 'Don\'t use neon colors', 'Don\'t make it too clean', 'Don\'t forget the texture'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S08"
    style_name: "Retro 60s–70s (Print Grain)"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5E6D3"
      secondary: "#EDD9C4"
    text:
      primary: "#3D2914"
      secondary: "#5C4033"
      muted: "#8B7355"
    brand:
      primary: "#C75B39"
      secondary: "#D4A574"
      accent: "#4A7C59"
    border:
      strong: "#5C4033"
      subtle: "#D4C4B0"
    state:
      success: "#4A7C59"
      warning: "#D4A574"
      error: "#C75B39"
    focus:
      ring: "#3D2914"
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
    none: none
    soft: "0 2px 8px rgba(61,41,20,0.1)"
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
      normal: 350
    easing: ease-out
  texture:
    grain: "url(/textures/paper-grain.png)"
  typography:
    font:
      sans:
        primary: "Groovy"
        fallback:
          - "Cooper Black"
          - "Rockwell"
          - "serif"
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
  'S09': {
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
    style_id: "S09"
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
  'S10': {
    paletteStrategy: 'Muted, sophisticated colors. Gold accents. Cream backgrounds.',
    typography: 'Elegant serifs. Refined spacing. Light weights.',
    radiusPolicy: 'Minimal (0-4px). Refined edges.',
    shadowPolicy: 'Subtle, soft shadows. Elegant depth.',
    borderLanguage: 'Thin, refined borders. Gold accents.',
    patterns: 'Subtle textures. Marble, linen.',
    motion: 'Slow, elegant transitions. Graceful.',
    dos: ['Use elegant serif typography', 'Create generous whitespace', 'Use high-quality imagery', 'Maintain refined aesthetics'],
    donts: ['Don\'t use playful elements', 'Don\'t overcrowd layouts', 'Don\'t use bright colors', 'Don\'t use casual fonts'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S10"
    style_name: "Luxury Editorial"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAF8F5"
      secondary: "#F5F0E8"
    text:
      primary: "#1C1C1C"
      secondary: "#4A4A4A"
      muted: "#8A8A8A"
    brand:
      primary: "#B8860B"
      accent: "#D4AF37"
    border:
      strong: "#D4AF37"
      subtle: "#E8E0D5"
    state:
      success: "#1C1C1C"
      warning: "#D4AF37"
      error: "#B8860B"
    focus:
      ring: "#1C1C1C"
  radius:
    none: 0
    sm: 2
    md: 4
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    soft: "0 4px 20px rgba(0,0,0,0.06)"
    elegant: "0 8px 30px rgba(0,0,0,0.08)"
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
    easing: ease-in-out
  typography:
    font:
      sans:
        primary: "Cormorant Garamond"
        fallback:
          - "Playfair Display"
          - "Georgia"
          - "serif"
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
    paletteStrategy: 'Muted, natural colors. Lots of white space. Subtle accents.',
    typography: 'Clean, minimal fonts. Light weights. Generous spacing.',
    radiusPolicy: 'Subtle (2-6px). Soft but not round.',
    shadowPolicy: 'Very subtle or none. Rely on space.',
    borderLanguage: 'Minimal, delicate borders.',
    patterns: 'None or subtle textures. Washi paper.',
    motion: 'Slow, deliberate. Zen-like.',
    dos: ['Embrace whitespace (ma)', 'Use subtle, natural colors', 'Create balance and harmony', 'Use delicate typography'],
    donts: ['Don\'t overcrowd the design', 'Don\'t use bold, loud colors', 'Don\'t add unnecessary elements', 'Don\'t break the zen'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S11"
    style_name: "Japanese Minimal"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FAFAF8"
      secondary: "#F5F5F0"
    text:
      primary: "#2C2C2C"
      secondary: "#5C5C5C"
      muted: "#9C9C9C"
    brand:
      primary: "#8B7355"
      accent: "#C4A77D"
    border:
      strong: "#D4D4D0"
      subtle: "#ECECEA"
    state:
      success: "#2C2C2C"
      warning: "#C4A77D"
      error: "#8B7355"
    focus:
      ring: "#2C2C2C"
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
    none: none
    subtle: "0 1px 3px rgba(0,0,0,0.04)"
  layout:
    container:
      content: 1200
      wide: 1400
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 24
      desktop: 40
  motion:
    duration:
      fast: 300
      normal: 600
    easing: ease-out
  typography:
    font:
      sans:
        primary: "Noto Sans JP"
        fallback:
          - "Hiragino Sans"
          - "Yu Gothic"
          - "sans-serif"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 300, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 300, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 300, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 300, tracking: 0 }
      small: { size: 14, line: 20, weight: 300, tracking: 0 }
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
    paletteStrategy: 'Earthy, natural colors. Greens, browns, blues. Organic feel.',
    typography: 'Humanist sans-serif. Natural flow. Mixed weights.',
    radiusPolicy: 'Organic (4-12px). Natural shapes.',
    shadowPolicy: 'Soft, diffused shadows. Natural depth.',
    borderLanguage: 'Soft, organic borders. Natural materials.',
    patterns: 'Organic patterns. Leaves, wood grain, water.',
    motion: 'Gentle, flowing. Natural rhythms.',
    dos: ['Use earth tones and natural colors', 'Add organic shapes and curves', 'Use natural textures', 'Create flowing layouts'],
    donts: ['Don\'t use harsh geometric shapes', 'Don\'t use artificial colors', 'Don\'t make it too rigid', 'Don\'t forget the organic feel'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S12"
    style_name: "Nature Organic"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F8F7F4"
      secondary: "#F0EDE6"
    text:
      primary: "#2D3748"
      secondary: "#4A5568"
      muted: "#718096"
    brand:
      primary: "#38A169"
      secondary: "#805AD5"
      accent: "#3182CE"
    border:
      strong: "#CBD5E0"
      subtle: "#E2E8F0"
    state:
      success: "#38A169"
      warning: "#D69E2E"
      error: "#E53E3E"
    focus:
      ring: "#38A169"
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 12
    xl: 16
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    soft: "0 2px 8px rgba(0,0,0,0.06)"
    medium: "0 4px 16px rgba(0,0,0,0.08)"
  layout:
    container:
      content: 1200
      wide: 1400
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 20
      desktop: 32
  motion:
    duration:
      fast: 200
      normal: 400
    easing: ease-out
  typography:
    font:
      sans:
        primary: "Lato"
        fallback:
          - "Open Sans"
          - "Roboto"
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
};
