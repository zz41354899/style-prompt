import type { StyleDNAConfig } from './types';

export const S19_S24_Configs: Record<string, StyleDNAConfig> = {
  'S19': {
    paletteStrategy: 'Analogous color harmony with strategic accent. Soft linear gradients create depth while maintaining visual comfort. High contrast ratios (WCAG AA) achieved through sophisticated value shifts rather than harsh color jumps.',
    typography: 'Humanist sans-serif with optical sizing. Refined letter-spacing (-0.025em for headlines) enhances readability. Clear visual hierarchy through weight variations (400-600) and calculated scale ratios (1.250). Line height optimized for scannability (1.625 for body).',
    radiusPolicy: 'Golden ratio-based corner radius (8-16px). Balanced curvature provides perceived affordance without sacrificing perceived precision. Larger radius for interactive elements, smaller for content containers.',
    shadowPolicy: 'Multi-layered colored shadows following elevation guidelines. Tinted shadows (brand color at 8-15% opacity) create natural depth. Shadow blur radius scales with elevation (8-32px). No harsh black shadows.',
    borderLanguage: 'Minimalist borders with strategic emphasis. 1px hairline borders for structure, 2px for interactive states. Gradient borders on CTAs draw attention without overwhelming.',
    patterns: 'Subtle noise textures (2% opacity) for depth. Micro-patterns in backgrounds create visual interest without cognitive load. Gradient overlays follow 45-degree angles for natural eye movement.',
    motion: 'Cognitive-load-aware micro-interactions. 200ms entry, 300ms exit timing follows human perception. Custom easing curves (cubic-bezier(0.25, 0.46, 0.45, 0.94)) for natural feel. Hover states provide immediate feedback (100ms).',
    dos: ['Use analogous color harmonies', 'Create subtle gradients', 'Apply golden ratio proportions', 'Use refined typography'],
    donts: ['Don\'t use harsh contrasts', 'Don\'t ignore visual hierarchy', 'Don\'t overcomplicate animations', 'Don\'t break the harmony'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S19"
    style_name: "Aesthetic Harmony"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#F8FAFC"
      gradient: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)"
    text:
      primary: "#1E293B"
      secondary: "#475569"
      muted: "#94A3B8"
    brand:
      primary: "#6366F1"
      secondary: "#8B5CF6"
      accent: "#EC4899"
    border:
      strong: "#E2E8F0"
      subtle: "#F1F5F9"
      gradient: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#6366F1"
    gradient:
      primary: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
      secondary: "linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)"
      subtle: "linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)"
  radius:
    none: 0
    sm: 8
    md: 12
    lg: 16
    xl: 20
    pill: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    sm: "0 2px 8px rgba(99,102,241,0.08), 0 1px 3px rgba(0,0,0,0.05)"
    md: "0 4px 16px rgba(99,102,241,0.12), 0 2px 6px rgba(0,0,0,0.08)"
    lg: "0 8px 32px rgba(99,102,241,0.15), 0 4px 12px rgba(0,0,0,0.1)"
    colored: "0 4px 16px rgba(99,102,241,0.2)"
    hover: "0 8px 24px rgba(99,102,241,0.25)"
  layout:
    container:
      content: 1140
      wide: 1320
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 20
      desktop: 28
  motion:
    duration:
      fast: 200
      normal: 300
      slow: 400
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
    hover: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "SF Pro Display"
          - "system-ui"
          - "-apple-system"
          - "Segoe UI"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "SF Mono"
          - "ui-monospace"
          - "SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.025 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.015 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.01 }
      h4: { size: 20, line: 28, weight: 500, tracking: -0.005 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
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
  'S20': {
    paletteStrategy: 'Aurora-inspired color flows. Ethereal gradients with organic transitions. Bioluminescent accents against dark backgrounds.',
    typography: 'Light, airy fonts with subtle glow effects. Increased tracking for dreamy readability. Weight variations create hierarchy.',
    radiusPolicy: 'Organic, flowing curves (12-24px). No hard edges, mimicking natural aurora movements.',
    shadowPolicy: 'Luminous glow shadows. Outer glow effects with color bleeding. Soft inner shadows for depth.',
    borderLanguage: 'No hard borders. Soft glow edges define boundaries. Animated border gradients.',
    patterns: 'Flowing aurora waves. Particle effects simulating ionized particles. Mesh gradients.',
    motion: 'Slow, organic movements (300-500ms). Easing curves follow natural sine waves. Floating animations.',
    dos: ['Use iridescent gradients', 'Add glowing effects', 'Create layered transparency', 'Use neon accents'],
    donts: ['Don\'t use flat colors', 'Don\'t ignore the glow', 'Don\'t make it opaque', 'Don\'t forget the aurora effect'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S20"
    style_name: "Aurora Borealis"
    industry: "Entertainment"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0A0E27"
      secondary: "#151933"
      gradient: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #0F1428 100%)"
    text:
      primary: "#E8F4FD"
      secondary: "#B8D4E3"
      muted: "#7A9BB0"
    brand:
      primary: "#00D4FF"
      secondary: "#7B2FF7"
      accent: "#00FF88"
      aurora1: "#00F5FF"
      aurora2: "#00B4D8"
      aurora3: "#0077B6"
    border:
      strong: "rgba(0, 212, 255, 0.3)"
      subtle: "rgba(0, 212, 255, 0.1)"
      glow: "rgba(0, 212, 255, 0.5)"
    state:
      success: "#00FF88"
      warning: "#FFD60A"
      error: "#FF006E"
    focus:
      ring: "#00D4FF"
    gradient:
      aurora: "linear-gradient(135deg, #00F5FF 0%, #7B2FF7 50%, #00FF88 100%)"
      night_sky: "radial-gradient(ellipse at top, #1A1F3A 0%, #0A0E27 100%)"
  radius:
    none: 0
    sm: 12
    md: 16
    lg: 20
    xl: 24
    organic: 9999
  border:
    width:
      hairline: 1
      soft: 2
      glow: 4
  shadow:
    glow_sm: "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)"
    glow_md: "0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.4)"
    glow_lg: "0 0 40px rgba(0, 212, 255, 0.7), 0 0 80px rgba(0, 212, 255, 0.5)"
    inner_glow: "inset 0 0 20px rgba(0, 212, 255, 0.3)"
  layout:
    container:
      content: 1160
      wide: 1360
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 24
      desktop: 32
  motion:
    duration:
      fast: 300
      normal: 400
      slow: 500
    easing: "cubic-bezier(0.45, 0, 0.55, 1)"
    float: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  typography:
    font:
      sans:
        primary: "Inter"
        fallback:
          - "SF Pro Display"
          - "system-ui"
          - "-apple-system"
    scale:
      h1: { size: 56, line: 64, weight: 300, tracking: 0.02 }
      h2: { size: 40, line: 48, weight: 300, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.005 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
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
  'S21': {
    paletteStrategy: 'Earthy, muted tones. Soft clay colors with natural warmth. Subtle variations create tactile depth.',
    typography: 'Rounded, friendly fonts. Soft edges match clay aesthetic. Medium weights for substance.',
    radiusPolicy: 'Extra rounded (16-32px). All elements feel moldable and soft.',
    shadowPolicy: 'Soft, pressed-in shadows. Multiple layers create clay depth. Inner shadows dominate.',
    borderLanguage: 'No borders. Clay forms defined by shadows and highlights.',
    patterns: 'Subtle clay texture. Imperfect organic shapes. Hand-molded feel.',
    motion: 'Bouncy, playful animations (400-600ms). Ease-out-back for tactile feedback.',
    dos: ['Use soft, rounded shapes', 'Create pressed-in effects', 'Use earthy colors', 'Add tactile shadows'],
    donts: ['Don\'t use sharp edges', 'Don\'t ignore the depth', 'Don\'t make it flat', 'Don\'t forget the clay feel'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S21"
    style_name: "Claymorphism"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F9F3ED"
      secondary: "#EAD7C0"
    text:
      primary: "#4A3426"
      secondary: "#6B5B4F"
      muted: "#8B7355"
    brand:
      primary: "#D4A574"
      secondary: "#E67E22"
      accent: "#A855F7"
    border:
      strong: transparent
      subtle: transparent
    state:
      success: "#4A7C59"
      warning: "#D4A574"
      error: "#E67E22"
    focus:
      ring: "#D4A574"
  radius:
    none: 0
    sm: 16
    md: 24
    lg: 32
    xl: 40
    pill: 9999
  border:
    width:
      hairline: 1
      medium: 2
      strong: 3
  shadow:
    raised: "8px 8px 16px rgba(155,123,89,0.3), -8px -8px 16px rgba(255,255,255,0.7)"
    pressed: "inset 6px 6px 12px rgba(155,123,89,0.3), inset -6px -6px 12px rgba(255,255,255,0.7)"
    soft: "4px 4px 8px rgba(155,123,89,0.2), -4px -4px 8px rgba(255,255,255,0.8)"
  layout:
    container:
      content: 1080
      wide: 1240
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 20
      desktop: 28
  motion:
    duration:
      fast: 400
      normal: 500
      slow: 600
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  typography:
    font:
      sans:
        primary: "Nunito"
        fallback:
          - "Quicksand"
          - "system-ui"
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
      body: { size: 16, line: 26, weight: 500, tracking: 0 }
      small: { size: 14, line: 22, weight: 500, tracking: 0 }
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
  'S22': {
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
    style_id: "S22"
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
  'S23': {
    paletteStrategy: 'Playful pastel palette. Bright, cheerful colors. Hand-drawn aesthetic.',
    typography: 'Mixed fonts. Handwritten feel with sans-serif readability. Varied styles.',
    radiusPolicy: 'Mixed. Organic shapes. Hand-drawn feel.',
    shadowPolicy: 'Soft, playful shadows. Colorful depth.',
    borderLanguage: 'Hand-drawn borders. Doodle patterns.',
    patterns: 'Crayon textures. Doodle patterns. Playful elements.',
    motion: 'Bouncy, playful animations (300-500ms). Fun easing.',
    dos: ['Use hand-drawn elements', 'Add playful patterns', 'Use vibrant colors', 'Create organic shapes'],
    donts: ['Don\'t be too rigid', 'Don\'t use perfect lines', 'Don\'t forget the fun', 'Don\'t make it too serious'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S23"
    style_name: "Doodle Sketch"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FFFEF0"
    text:
      primary: "#3D3D3D"
      secondary: "#5A5A5A"
      muted: "#888888"
    brand:
      primary: "#FF6B9D"
      secondary: "#66D9EF"
      accent: "#A8E6CF"
    border:
      strong: "#5A5A5A"
      subtle: "#E0E0E0"
      doodle: "#FFB347"
    state:
      success: "#A8E6CF"
      warning: "#FFDAB9"
      error: "#FF6B9D"
    focus:
      ring: "#66D9EF"
  radius:
    none: 0
    sm: 8
    md: 16
    lg: 24
    organic: "40% 60% 60% 40% / 60% 40% 60% 40%"
  border:
    width:
      hairline: 2
      medium: 3
      strong: 4
  shadow:
    soft: "0 4px 12px rgba(61,61,61,0.1)"
    colorful: "0 4px 12px rgba(255,107,157,0.2)"
    handdrawn: "2px 2px 0 #FFB347"
  layout:
    container:
      content: 1100
      wide: 1260
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 18
      desktop: 26
  motion:
    duration:
      fast: 300
      normal: 400
      slow: 500
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  typography:
    font:
      sans:
        primary: "Comic Neue"
        fallback:
          - "Comic Sans MS"
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
      body: { size: 16, line: 26, weight: 500, tracking: 0 }
      small: { size: 14, line: 22, weight: 500, tracking: 0 }
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
  'S24': {
    paletteStrategy: 'Minimal cyan/blue palette. Clean tech aesthetic. High contrast.',
    typography: 'Geometric monospace. Tech feel. Clean lines.',
    radiusPolicy: 'Minimal (0-4px). Sharp, tech aesthetic.',
    shadowPolicy: 'Subtle tech shadows. Glow effects.',
    borderLanguage: 'Thin tech borders. Cyan accents.',
    patterns: 'Tech grid patterns. Minimal lines.',
    motion: 'Fast, precise animations (150-300ms). Tech feel.',
    dos: ['Use clean geometric lines', 'Create minimal compositions', 'Use cyan/blue accents', 'Keep it precise'],
    donts: ['Don\'t add unnecessary details', 'Don\'t use complex shapes', 'Don\'t overcomplicate', 'Don\'t break the minimalism'],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S24"
    style_name: "Minimalist Line Art"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#0F172A"
      secondary: "#1E293B"
    text:
      primary: "#FFFFFF"
      secondary: "#94A3B8"
      muted: "#64748B"
    brand:
      primary: "#06B6D4"
      secondary: "#3B82F6"
      accent: "#10B981"
    border:
      strong: "#334155"
      subtle: "#1E293B"
      tech: "#06B6D4"
    state:
      success: "#10B981"
      warning: "#F59E0B"
      error: "#EF4444"
    focus:
      ring: "#06B6D4"
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
    tech: "0 0 20px rgba(6, 182, 212, 0.3)"
    elevation: "0 4px 16px rgba(0,0,0,0.2)"
    minimal: "0 1px 3px rgba(0,0,0,0.1)"
  layout:
    container:
      content: 1040
      wide: 1200
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 12
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
        primary: "JetBrains Mono"
        fallback:
          - "Fira Code"
          - "SF Mono"
          - "monospace"
      mono:
        primary: "JetBrains Mono"
        fallback:
          - "Fira Code"
          - "SF Mono"
          - "monospace"
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
    base: 4
    section_py:
      mobile: [64, 80]
      desktop: [96, 112]
\`\`\``,
  },
};
