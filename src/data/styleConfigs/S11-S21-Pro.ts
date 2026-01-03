import type { StyleDNAConfig } from './types';

// Pro 版進階風格配置 (S11-S21)
export const S11_S21_Pro_Configs: Record<string, StyleDNAConfig> = {
    'S11-Pro': {
        paletteStrategy: 'Muted natural tones on warm white #FAFAF8. Subtle earth accents #8B7355 and #C4A77D. High whitespace ratio.',
        typography: 'Clean Japanese-inspired sans-serif (Noto Sans JP). Light weights (300). Generous letter-spacing. Zen-like hierarchy.',
        radiusPolicy: 'Subtle curves (2-6px). Soft but precise edges reflecting wabi-sabi aesthetics.',
        shadowPolicy: 'Almost none. Rely on spacing and subtle borders. Maximum shadow: 0 1px 3px rgba(0,0,0,0.04).',
        borderLanguage: 'Delicate 1px borders in #ECECEA. Minimal dividers. Ma (間) negative space.',
        patterns: 'None or extremely subtle washi paper texture. Pure minimalism.',
        motion: 'Slow, deliberate animations 300-600ms. Zen-like ease-out transitions.',
        dos: [
            'Embrace Ma (間) - the beauty of empty space',
            'Use extremely light font weights (300)',
            'Create asymmetric balance',
            'Use natural, muted color palette',
            'Implement slow, contemplative animations',
            'Maintain WCAG AA contrast with subtlety'
        ],
        donts: [
            'Don\'t overcrowd any section',
            'Don\'t use bold or loud colors',
            'Don\'t add decorative elements',
            'Don\'t use fast or flashy animations',
            'Don\'t break the zen-like calm'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S11-Pro"
    style_name: "Japanese Minimal Pro"
    industry: "Design Studio"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FAFAF8"
      secondary: "#F5F5F0"
      elevated: "#FFFFFF"
    border:
      subtle: "#ECECEA"
      strong: "#D4D4D0"
    text:
      primary: "#2C2C2C"
      secondary: "#5C5C5C"
      muted: "#9C9C9C"
      inverse: "#FFFFFF"
    brand:
      primary: "#8B7355"
      accent: "#C4A77D"
    status:
      success: "#4A7C59"
      warning: "#C4A77D"
      danger: "#8B7355"
  typography:
    fontFamily:
      sans: "Noto Sans JP, Hiragino Sans, Yu Gothic, sans-serif"
      serif: "Noto Serif JP, Georgia, serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular"
    scale:
      h1: { size: 48, line: 64, weight: 300, tracking: 0.02 }
      h2: { size: 36, line: 48, weight: 300, tracking: 0.01 }
      h3: { size: 24, line: 36, weight: 300, tracking: 0 }
      body: { size: 16, line: 28, weight: 300, tracking: 0.01 }
      small: { size: 14, line: 24, weight: 300, tracking: 0.02 }
    letterSpacing:
      tight: 0
      normal: 0.01
      wide: 0.02
  radius:
    sm: 2
    md: 4
    lg: 6
  shadow:
    none: "none"
    subtle: "0 1px 3px rgba(0,0,0,0.04)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 40
      tablet: 32
      mobile: 24
    sectionY:
      desktop: 128
      tablet: 96
      mobile: 64
  motion:
    duration:
      fast: 300
      normal: 600
      slow: 900
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
  breakpoints:
    mobile: 480
    tablet: 768
    desktop: 1024
    wide: 1280
  sections:
    - "Minimal Navigation"
    - "Zen Hero"
    - "Philosophy Section"
    - "Value Proposition"
    - "Features with Ma"
    - "Process Flow"
    - "Trust & Testimonials"
    - "Pricing Cards"
    - "FAQ"
    - "Contact CTA"
    - "Minimal Footer"
\`\`\``,
    },

    'S12-Pro': {
        paletteStrategy: 'Earthy, natural palette. Warm cream #F8F7F4 background. Forest green #38A169, sky blue #3182CE, lavender #805AD5 accents.',
        typography: 'Humanist sans-serif (Lato, Open Sans). Natural flow with mixed weights. Warm, approachable feel.',
        radiusPolicy: 'Organic curves (8-16px). Soft, natural shapes.',
        shadowPolicy: 'Soft, diffused shadows suggesting natural light. 0 4px 16px rgba(0,0,0,0.08).',
        borderLanguage: 'Soft organic borders. Natural grain textures.',
        patterns: 'Subtle leaf patterns, wood grain hints, organic shapes.',
        motion: 'Gentle, flowing animations 200-400ms. Natural ease-out curves.',
        dos: [
            'Use earth tones and natural greens',
            'Create organic, flowing layouts',
            'Add subtle natural textures',
            'Use rounded, soft shapes',
            'Implement gentle hover effects',
            'Maintain accessible contrast ratios'
        ],
        donts: [
            'Don\'t use harsh geometric shapes',
            'Don\'t use artificial neon colors',
            'Don\'t make layouts too rigid',
            'Don\'t forget the organic warmth'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S12-Pro"
    style_name: "Nature Organic Pro"
    industry: "Wellness/Eco"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F8F7F4"
      secondary: "#F0EDE6"
      elevated: "#FFFFFF"
    border:
      subtle: "#E2E8F0"
      strong: "#CBD5E0"
    text:
      primary: "#2D3748"
      secondary: "#4A5568"
      muted: "#718096"
      inverse: "#FFFFFF"
    brand:
      primary: "#38A169"
      secondary: "#805AD5"
      accent: "#3182CE"
    status:
      success: "#38A169"
      warning: "#D69E2E"
      danger: "#E53E3E"
  typography:
    fontFamily:
      sans: "Lato, Open Sans, Roboto, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 8
    md: 12
    lg: 16
    xl: 24
  shadow:
    soft: "0 2px 8px rgba(0,0,0,0.06)"
    medium: "0 4px 16px rgba(0,0,0,0.08)"
    large: "0 8px 32px rgba(0,0,0,0.1)"
  spacing:
    gridMax: 1200
    gutter:
      desktop: 32
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 200
      normal: 400
      slow: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Organic Navigation"
    - "Nature Hero"
    - "Problem Statement"
    - "Value Proposition"
    - "Features Grid"
    - "How It Works"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA Section"
    - "Footer"
\`\`\``,
    },

    'S13-Pro': {
        paletteStrategy: 'Clean Material palette. White #FFFFFF surface. Deep purple #6200EE primary, teal #03DAC6 secondary.',
        typography: 'Roboto family. Clear hierarchy with medium weights. Systematic scale.',
        radiusPolicy: 'Consistent Material radius (4-8px). Systematic approach.',
        shadowPolicy: 'Material elevation system. 3 levels of depth.',
        borderLanguage: 'Minimal borders. Rely on shadows and color for definition.',
        patterns: 'None. Pure Material surfaces.',
        motion: 'Responsive Material animations 150-250ms. Standard Material curves.',
        dos: [
            'Use Material elevation shadows',
            'Follow systematic spacing (8px grid)',
            'Use bold primary colors purposefully',
            'Create clear visual hierarchy',
            'Implement Material motion principles'
        ],
        donts: [
            'Don\'t use flat design',
            'Don\'t ignore elevation guidelines',
            'Don\'t use too many elevation levels',
            'Don\'t break Material consistency'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S13-Pro"
    style_name: "Material Pro"
    industry: "Tech/SaaS"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
      surface: "#FFFFFF"
    border:
      subtle: "#F5F5F5"
      strong: "#E0E0E0"
    text:
      primary: "#212121"
      secondary: "#757575"
      muted: "#9E9E9E"
      inverse: "#FFFFFF"
    brand:
      primary: "#6200EE"
      primaryVariant: "#3700B3"
      secondary: "#03DAC6"
      secondaryVariant: "#018786"
    status:
      success: "#03DAC6"
      warning: "#FF5722"
      danger: "#B00020"
  typography:
    fontFamily:
      sans: "Roboto, Inter, system-ui, -apple-system, Segoe UI, sans-serif"
      mono: "Roboto Mono, JetBrains Mono, ui-monospace"
    scale:
      h1: { size: 56, line: 64, weight: 400, tracking: -0.015 }
      h2: { size: 40, line: 48, weight: 400, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 500, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0.01 }
      small: { size: 14, line: 20, weight: 400, tracking: 0.01 }
  radius:
    sm: 4
    md: 8
    lg: 16
  shadow:
    elevation1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    elevation2: "0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)"
    elevation3: "0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)"
    elevation4: "0 14px 28px rgba(0,0,0,0.18), 0 10px 10px rgba(0,0,0,0.12)"
  spacing:
    base: 8
    gridMax: 1120
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 150
      normal: 250
      slow: 375
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Material App Bar"
    - "Hero with FAB"
    - "Problem Cards"
    - "Value Proposition"
    - "Feature Tiles"
    - "How It Works"
    - "Trust Signals"
    - "Pricing Cards"
    - "FAQ Expansion Panels"
    - "CTA"
    - "Footer"
\`\`\``,
    },

    'S14-Pro': {
        paletteStrategy: 'Translucent colors on gradient backgrounds. Frosted white rgba(255,255,255,0.7). Purple-blue gradient backdrop.',
        typography: 'Modern SF Pro Display or Inter. Clean and readable through glass.',
        radiusPolicy: 'Large soft radius (16-28px). Pill shapes for buttons.',
        shadowPolicy: 'Soft glass shadows with blur. 0 8px 32px rgba(0,0,0,0.1).',
        borderLanguage: 'Subtle white borders rgba(255,255,255,0.3). Frosted edges.',
        patterns: 'Gradient blurs, layered transparencies, mesh gradients.',
        motion: 'Smooth parallax animations 200-400ms. Floating effects.',
        dos: [
            'Use backdrop-filter blur effects',
            'Layer transparent elements',
            'Create depth with overlapping glass cards',
            'Use gradient backgrounds',
            'Apply soft colored shadows'
        ],
        donts: [
            'Don\'t use fully opaque backgrounds',
            'Don\'t forget the blur effect',
            'Don\'t use harsh edges',
            'Don\'t overuse the glass effect'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S14-Pro"
    style_name: "Glassmorphism Pro"
    industry: "Tech/Creative"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "rgba(255,255,255,0.7)"
      secondary: "rgba(255,255,255,0.5)"
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      mesh: "radial-gradient(at 40% 20%, #667eea 0px, transparent 50%), radial-gradient(at 80% 0%, #764ba2 0px, transparent 50%)"
    border:
      glass: "rgba(255,255,255,0.3)"
      subtle: "rgba(255,255,255,0.1)"
    text:
      primary: "#1A1A2E"
      secondary: "#4A4A6A"
      muted: "#8A8AA0"
      inverse: "#FFFFFF"
    brand:
      primary: "#667eea"
      secondary: "#764ba2"
      accent: "#a855f7"
    status:
      success: "#10b981"
      warning: "#f59e0b"
      danger: "#ef4444"
  typography:
    fontFamily:
      sans: "SF Pro Display, Inter, system-ui, sans-serif"
      mono: "JetBrains Mono, SF Mono, ui-monospace"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 12
    md: 20
    lg: 28
    pill: 9999
  shadow:
    glass: "0 8px 32px rgba(0,0,0,0.1)"
    soft: "0 4px 16px rgba(0,0,0,0.08)"
    glow: "0 0 40px rgba(102,126,234,0.3)"
  blur:
    glass: "blur(10px)"
    strong: "blur(20px)"
    subtle: "blur(4px)"
  spacing:
    gridMax: 1120
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 64
  motion:
    duration:
      fast: 200
      normal: 400
      slow: 600
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Glass Navigation"
    - "Gradient Hero"
    - "Problem Section"
    - "Value Cards"
    - "Feature Glass Panels"
    - "Process Steps"
    - "Trust Section"
    - "Pricing Glass Cards"
    - "FAQ"
    - "CTA"
    - "Footer"
\`\`\``,
    },

    'S15-Pro': {
        paletteStrategy: 'Monochromatic soft gray #E0E5EC. Subtle color shifts for depth. Minimal accent colors.',
        typography: 'Rounded sans-serif (Quicksand, Nunito). Soft text shadows for legibility.',
        radiusPolicy: 'Large soft radius (12-24px). Pillowy, tactile feel.',
        shadowPolicy: 'Dual shadows (light on top-left, dark on bottom-right). Embossed/debossed effects.',
        borderLanguage: 'None. Shadows define boundaries.',
        patterns: 'None. Pure form and shadow.',
        motion: 'Subtle press effects 100-200ms. Tactile feedback.',
        dos: [
            'Use dual-direction shadows',
            'Create embossed and debossed states',
            'Keep colors monochromatic',
            'Make interactive elements feel pressable',
            'Ensure sufficient contrast for accessibility'
        ],
        donts: [
            'Don\'t use high contrast colors',
            'Don\'t use flat design',
            'Don\'t use too many accent colors',
            'Don\'t forget accessibility considerations'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S15-Pro"
    style_name: "Neumorphism Pro"
    industry: "App/Dashboard"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#E0E5EC"
      secondary: "#D1D9E6"
      elevated: "#E0E5EC"
    text:
      primary: "#2D3748"
      secondary: "#4A5568"
      muted: "#718096"
      inverse: "#FFFFFF"
    brand:
      primary: "#6366F1"
      secondary: "#8B5CF6"
      accent: "#EC4899"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Quicksand, Nunito, system-ui, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 500, tracking: 0 }
      small: { size: 14, line: 20, weight: 500, tracking: 0 }
  radius:
    sm: 12
    md: 16
    lg: 24
    xl: 32
  shadow:
    raised: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff"
    inset: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff"
    pressed: "inset 2px 2px 5px #b8bec7, inset -2px -2px 5px #ffffff"
    floating: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff"
  spacing:
    gridMax: 1080
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 100
      normal: 200
      slow: 300
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  sections:
    - "Neumorphic Navigation"
    - "Hero Section"
    - "Problem Cards"
    - "Value Proposition"
    - "Feature Panels"
    - "How It Works"
    - "Trust Section"
    - "Pricing Cards"
    - "FAQ"
    - "CTA"
    - "Footer"
\`\`\``,
    },

    'S16-Pro': {
        paletteStrategy: 'Matrix green #00FF00 on pure black #0D0D0D. Amber #FFAA00 for warnings. Monochrome terminal aesthetic.',
        typography: 'Monospace only (Fira Code, Courier New). Fixed-width precision.',
        radiusPolicy: 'Zero radius. Sharp terminal corners.',
        shadowPolicy: 'None or terminal glow. 0 0 10px #00FF00.',
        borderLanguage: 'ASCII-style borders. Box-drawing characters feel.',
        patterns: 'Scanlines, CRT effects, matrix rain hints.',
        motion: 'Typing effects, cursor blinks. Step-end or instant transitions.',
        dos: [
            'Use monospace typography exclusively',
            'Implement typing/cursor animations',
            'Create terminal-like input fields',
            'Use green/amber on black',
            'Add subtle CRT/scanline effects'
        ],
        donts: [
            'Don\'t use colorful palettes',
            'Don\'t use rounded corners',
            'Don\'t use images heavily',
            'Don\'t break the terminal immersion'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S16-Pro"
    style_name: "Terminal Pro"
    industry: "Developer Tools"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0D0D0D"
      secondary: "#1A1A1A"
      elevated: "#0D0D0D"
    border:
      subtle: "#004400"
      strong: "#00FF00"
    text:
      primary: "#00FF00"
      secondary: "#00CC00"
      muted: "#008800"
      inverse: "#0D0D0D"
      amber: "#FFAA00"
    brand:
      primary: "#00FF00"
      accent: "#FFAA00"
    status:
      success: "#00FF00"
      warning: "#FFAA00"
      danger: "#FF4444"
  typography:
    fontFamily:
      mono: "Fira Code, JetBrains Mono, Courier New, monospace"
      sans: "Fira Code, monospace"
    scale:
      h1: { size: 48, line: 56, weight: 400, tracking: 0 }
      h2: { size: 32, line: 40, weight: 400, tracking: 0 }
      h3: { size: 24, line: 32, weight: 400, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  radius:
    none: 0
    sm: 0
    md: 0
  shadow:
    none: "none"
    glow: "0 0 10px #00FF00"
    amber_glow: "0 0 10px #FFAA00"
  spacing:
    gridMax: 1024
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 80
      tablet: 64
      mobile: 48
  motion:
    duration:
      fast: 0
      normal: 50
      typing: 30
    easing: "step-end"
  sections:
    - "Terminal Header"
    - "ASCII Hero"
    - "Features List"
    - "Code Examples"
    - "Command Reference"
    - "Installation Guide"
    - "Testimonials"
    - "Pricing Table"
    - "FAQ"
    - "Contact Terminal"
    - "Footer"
\`\`\``,
    },

    'S17-Pro': {
        paletteStrategy: 'Primary colors only: red #FF0000, blue #0000FF, yellow #FFFF00. Black #000000 accents on white.',
        typography: 'Geometric sans-serif (Helvetica Now, Bebas Neue). Bold weights. Grid-aligned.',
        radiusPolicy: 'Zero for rectangles. Full circle for decorative elements.',
        shadowPolicy: 'None or hard offset shadows. 4px 4px 0 #000000.',
        borderLanguage: 'Thick black borders (2-6px). Geometric dividers.',
        patterns: 'Geometric shapes: circles, squares, triangles.',
        motion: 'Linear transitions 100-200ms. No easing.',
        dos: [
            'Use bold primary colors',
            'Create strict grid layouts',
            'Use large geometric shapes',
            'Keep typography bold and geometric',
            'Maintain high contrast'
        ],
        donts: [
            'Don\'t use gradients or glassmorphism',
            'Don\'t over-animate',
            'Don\'t round rectangles',
            'Don\'t use muted colors'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S17-Pro"
    style_name: "Bauhaus Modernism Pro"
    industry: "Design/Architecture"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F5F5F5"
    border:
      subtle: "#E0E0E0"
      strong: "#000000"
    text:
      primary: "#000000"
      secondary: "#333333"
      muted: "#666666"
      inverse: "#FFFFFF"
    brand:
      red: "#FF0000"
      blue: "#0000FF"
      yellow: "#FFFF00"
      primary: "#000000"
    status:
      success: "#0000FF"
      warning: "#FFFF00"
      danger: "#FF0000"
  typography:
    fontFamily:
      sans: "Helvetica Now, Bebas Neue, Arial, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular"
    scale:
      h1: { size: 72, line: 80, weight: 700, tracking: -0.02 }
      h2: { size: 48, line: 56, weight: 700, tracking: -0.01 }
      h3: { size: 32, line: 40, weight: 700, tracking: 0 }
      body: { size: 16, line: 24, weight: 400, tracking: 0 }
      small: { size: 14, line: 20, weight: 400, tracking: 0 }
  radius:
    none: 0
    sm: 0
    md: 0
    circle: 9999
  shadow:
    none: "none"
    hard: "4px 4px 0 #000000"
    hard_large: "8px 8px 0 #000000"
  border:
    width:
      thin: 2
      medium: 4
      thick: 6
  spacing:
    gridMax: 1120
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 100
      normal: 200
    easing: "linear"
  sections:
    - "Geometric Navigation"
    - "Bold Hero"
    - "Manifesto Section"
    - "Features Grid"
    - "Process Diagram"
    - "Gallery"
    - "Testimonials"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Footer Grid"
\`\`\``,
    },

    'S18-Pro': {
        paletteStrategy: 'Limited 8-bit palette. Dark #2C2C2C background. Neon accents #00FF00, #FF00FF, #00FFFF.',
        typography: 'Pixel fonts (Press Start 2P, VT323). Blocky, nostalgic.',
        radiusPolicy: 'Zero. Pixel-perfect edges.',
        shadowPolicy: 'None or pixelated offset. 2px 2px 0 #000000.',
        borderLanguage: 'Pixel borders. 8-bit aesthetic.',
        patterns: 'Dither patterns, pixel sprites, retro game elements.',
        motion: 'Frame-by-frame animations. Steps(4) timing.',
        dos: [
            'Use pixel-perfect grids',
            'Add dither patterns and noise',
            'Use 8-bit color palettes',
            'Create nostalgic game UI elements',
            'Implement step-based animations'
        ],
        donts: [
            'Don\'t use smooth gradients',
            'Don\'t use high-resolution imagery',
            'Don\'t use modern smooth effects',
            'Don\'t break the pixel aesthetic'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S18-Pro"
    style_name: "Retro Pixel UI Pro"
    industry: "Gaming/Entertainment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#2C2C2C"
      secondary: "#1A1A1A"
      elevated: "#3C3C3C"
    border:
      subtle: "#444444"
      strong: "#FFFFFF"
    text:
      primary: "#FFFFFF"
      secondary: "#CCCCCC"
      muted: "#888888"
      inverse: "#000000"
    brand:
      primary: "#00FF00"
      secondary: "#FF00FF"
      accent: "#00FFFF"
      yellow: "#FFFF00"
    status:
      success: "#00FF00"
      warning: "#FFFF00"
      danger: "#FF0000"
  typography:
    fontFamily:
      pixel: "Press Start 2P, VT323, monospace"
      sans: "VT323, Press Start 2P, monospace"
      mono: "Press Start 2P, VT323, monospace"
    scale:
      h1: { size: 32, line: 48, weight: 400, tracking: 0.05 }
      h2: { size: 24, line: 36, weight: 400, tracking: 0.03 }
      h3: { size: 16, line: 24, weight: 400, tracking: 0.02 }
      body: { size: 12, line: 20, weight: 400, tracking: 0.02 }
      small: { size: 10, line: 16, weight: 400, tracking: 0.02 }
  radius:
    none: 0
    sm: 0
    md: 0
  shadow:
    none: "none"
    pixel: "2px 2px 0 #000000"
    pixel_colored: "2px 2px 0 #00FF00"
  spacing:
    gridMax: 960
    gutter:
      desktop: 24
      tablet: 16
      mobile: 16
    sectionY:
      desktop: 80
      tablet: 64
      mobile: 48
  motion:
    duration:
      fast: 50
      normal: 100
    easing: "steps(4)"
  sections:
    - "Pixel Navigation"
    - "Game Start Hero"
    - "Level Select Features"
    - "Power-Ups Section"
    - "High Score Stats"
    - "Player Testimonials"
    - "Pricing Coins"
    - "FAQ Scroll"
    - "Insert Coin CTA"
    - "Game Over Footer"
\`\`\``,
    },

    'S19-Pro': {
        paletteStrategy: 'Analogous harmony with indigo #6366F1 and violet #8B5CF6. Soft gradients. High contrast text.',
        typography: 'Humanist Inter with optical sizing. Refined letter-spacing.',
        radiusPolicy: 'Golden ratio curves (8-20px). Balanced and intentional.',
        shadowPolicy: 'Colored shadows with brand tint. Multi-layered depth.',
        borderLanguage: 'Gradient borders on CTAs. Subtle 1px structural borders.',
        patterns: 'Subtle noise textures (2% opacity). Gradient overlays.',
        motion: 'Micro-interactions 200-300ms. Custom easing curves.',
        dos: [
            'Use analogous color harmonies',
            'Create subtle gradient backgrounds',
            'Apply golden ratio proportions',
            'Use refined typography with optical sizing',
            'Implement purposeful micro-interactions'
        ],
        donts: [
            'Don\'t use harsh color contrasts',
            'Don\'t ignore visual hierarchy',
            'Don\'t overcomplicate animations',
            'Don\'t break the aesthetic harmony'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S19-Pro"
    style_name: "Aesthetic Harmony Pro"
    industry: "SaaS/Creative"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F8FAFC"
      gradient: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)"
    border:
      subtle: "#F1F5F9"
      strong: "#E2E8F0"
      gradient: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)"
    text:
      primary: "#1E293B"
      secondary: "#475569"
      muted: "#94A3B8"
      inverse: "#FFFFFF"
    brand:
      primary: "#6366F1"
      secondary: "#8B5CF6"
      accent: "#EC4899"
    gradient:
      primary: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
      secondary: "linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)"
    status:
      success: "#10B981"
      warning: "#F59E0B"
      danger: "#EF4444"
  typography:
    fontFamily:
      sans: "Inter, SF Pro Display, system-ui, -apple-system, Segoe UI, sans-serif"
      mono: "JetBrains Mono, SF Mono, ui-monospace, SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.025 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.015 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.01 }
      h4: { size: 20, line: 28, weight: 500, tracking: -0.005 }
      body: { size: 16, line: 26, weight: 400, tracking: 0 }
      small: { size: 14, line: 22, weight: 400, tracking: 0 }
  radius:
    sm: 8
    md: 12
    lg: 16
    xl: 20
    pill: 9999
  shadow:
    sm: "0 2px 8px rgba(99,102,241,0.08), 0 1px 3px rgba(0,0,0,0.05)"
    md: "0 4px 16px rgba(99,102,241,0.12), 0 2px 6px rgba(0,0,0,0.08)"
    lg: "0 8px 32px rgba(99,102,241,0.15), 0 4px 12px rgba(0,0,0,0.1)"
    colored: "0 4px 16px rgba(99,102,241,0.2)"
    hover: "0 8px 24px rgba(99,102,241,0.25)"
  spacing:
    gridMax: 1140
    gutter:
      desktop: 28
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 128
      tablet: 96
      mobile: 80
  motion:
    duration:
      fast: 200
      normal: 300
      slow: 400
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
    hover: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  sections:
    - "Harmonious Navigation"
    - "Gradient Hero"
    - "Problem Statement"
    - "Value Proposition"
    - "Feature Bento"
    - "How It Works"
    - "Integrations"
    - "Trust & Proof"
    - "Pricing"
    - "FAQ"
    - "CTA"
    - "Footer"
\`\`\``,
    },

    'S20-Pro': {
        paletteStrategy: 'Aurora-inspired palette on dark #0A0E27. Cyan #00D4FF, purple #7B2FF7, green #00FF88 gradients.',
        typography: 'Light, airy Inter. Subtle glow effects. Increased tracking.',
        radiusPolicy: 'Organic flowing curves (12-24px). Aurora movement feel.',
        shadowPolicy: 'Luminous glow shadows. Neon color bleeding effects.',
        borderLanguage: 'Soft glow borders. Animated gradient edges.',
        patterns: 'Aurora wave gradients. Mesh gradients. Particle hints.',
        motion: 'Slow organic movements 300-500ms. Floating animations.',
        dos: [
            'Use iridescent aurora gradients',
            'Add glowing neon effects',
            'Create layered transparency',
            'Implement floating animations',
            'Use light font weights'
        ],
        donts: [
            'Don\'t use flat solid colors',
            'Don\'t skip the glow effects',
            'Don\'t make backgrounds fully opaque',
            'Don\'t use heavy font weights'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S20-Pro"
    style_name: "Aurora Borealis Pro"
    industry: "Entertainment/Creative"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0E27"
      secondary: "#151933"
      gradient: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #0F1428 100%)"
    border:
      subtle: "rgba(0, 212, 255, 0.1)"
      strong: "rgba(0, 212, 255, 0.3)"
      glow: "rgba(0, 212, 255, 0.5)"
    text:
      primary: "#E8F4FD"
      secondary: "#B8D4E3"
      muted: "#7A9BB0"
      inverse: "#0A0E27"
    brand:
      primary: "#00D4FF"
      secondary: "#7B2FF7"
      accent: "#00FF88"
      aurora1: "#00F5FF"
      aurora2: "#00B4D8"
      aurora3: "#0077B6"
    gradient:
      aurora: "linear-gradient(135deg, #00F5FF 0%, #7B2FF7 50%, #00FF88 100%)"
      night_sky: "radial-gradient(ellipse at top, #1A1F3A 0%, #0A0E27 100%)"
    status:
      success: "#00FF88"
      warning: "#FFD60A"
      danger: "#FF006E"
  typography:
    fontFamily:
      sans: "Inter, SF Pro Display, system-ui, -apple-system, sans-serif"
      mono: "JetBrains Mono, SF Mono, ui-monospace"
    scale:
      h1: { size: 56, line: 64, weight: 300, tracking: 0.02 }
      h2: { size: 40, line: 48, weight: 300, tracking: 0.01 }
      h3: { size: 28, line: 36, weight: 400, tracking: 0 }
      body: { size: 16, line: 26, weight: 400, tracking: 0.005 }
      small: { size: 14, line: 22, weight: 400, tracking: 0.01 }
  radius:
    sm: 12
    md: 16
    lg: 20
    xl: 24
    organic: 9999
  shadow:
    glow_sm: "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)"
    glow_md: "0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.4)"
    glow_lg: "0 0 40px rgba(0, 212, 255, 0.7), 0 0 80px rgba(0, 212, 255, 0.5)"
    inner_glow: "inset 0 0 20px rgba(0, 212, 255, 0.3)"
    aurora: "0 0 60px rgba(123, 47, 247, 0.4), 0 0 30px rgba(0, 255, 136, 0.3)"
  spacing:
    gridMax: 1160
    gutter:
      desktop: 32
      tablet: 28
      mobile: 24
    sectionY:
      desktop: 128
      tablet: 96
      mobile: 80
  motion:
    duration:
      fast: 300
      normal: 400
      slow: 500
      float: 3000
    easing: "cubic-bezier(0.45, 0, 0.55, 1)"
    float: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  sections:
    - "Aurora Navigation"
    - "Night Sky Hero"
    - "Problem Section"
    - "Value Proposition"
    - "Feature Glow Cards"
    - "How It Works"
    - "Integrations"
    - "Trust & Stats"
    - "Pricing"
    - "FAQ"
    - "Aurora CTA"
    - "Footer"
\`\`\``,
    },

    'S21-Pro': {
        paletteStrategy: 'Earthy clay tones. Warm cream #F9F3ED background. Terracotta #D4A574, sienna #E67E22 accents.',
        typography: 'Rounded friendly fonts (Nunito, Quicksand). Medium weights for substance.',
        radiusPolicy: 'Extra rounded (16-40px). Soft, moldable appearance.',
        shadowPolicy: 'Soft clay shadows. Multiple layers for depth. Inner shadows for pressed states.',
        borderLanguage: 'None. Clay forms defined purely by shadows.',
        patterns: 'Subtle clay texture. Organic imperfections.',
        motion: 'Bouncy playful animations 400-600ms. Ease-out-back for tactile feel.',
        dos: [
            'Use soft rounded shapes everywhere',
            'Create pressed-in effects for buttons',
            'Use warm earthy color palette',
            'Add tactile shadow layers',
            'Implement bouncy hover states'
        ],
        donts: [
            'Don\'t use sharp corners',
            'Don\'t forget the shadow depth',
            'Don\'t make it flat',
            'Don\'t use cold colors'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S21-Pro"
    style_name: "Claymorphism Pro"
    industry: "App/Consumer"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F9F3ED"
      secondary: "#EAD7C0"
      elevated: "#FFFFFF"
    border:
      subtle: "transparent"
      strong: "transparent"
    text:
      primary: "#4A3426"
      secondary: "#6B5B4F"
      muted: "#8B7355"
      inverse: "#FFFFFF"
    brand:
      primary: "#D4A574"
      secondary: "#E67E22"
      accent: "#A855F7"
    status:
      success: "#4A7C59"
      warning: "#D4A574"
      danger: "#E67E22"
  typography:
    fontFamily:
      sans: "Nunito, Quicksand, system-ui, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular"
    scale:
      h1: { size: 56, line: 64, weight: 700, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 700, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 700, tracking: -0.005 }
      body: { size: 16, line: 26, weight: 500, tracking: 0 }
      small: { size: 14, line: 22, weight: 500, tracking: 0 }
  radius:
    sm: 16
    md: 24
    lg: 32
    xl: 40
    pill: 9999
  shadow:
    raised: "8px 8px 16px rgba(155,123,89,0.3), -8px -8px 16px rgba(255,255,255,0.7)"
    pressed: "inset 6px 6px 12px rgba(155,123,89,0.3), inset -6px -6px 12px rgba(255,255,255,0.7)"
    soft: "4px 4px 8px rgba(155,123,89,0.2), -4px -4px 8px rgba(255,255,255,0.8)"
    floating: "12px 12px 24px rgba(155,123,89,0.35), -12px -12px 24px rgba(255,255,255,0.75)"
  spacing:
    gridMax: 1080
    gutter:
      desktop: 28
      tablet: 24
      mobile: 20
    sectionY:
      desktop: 112
      tablet: 88
      mobile: 72
  motion:
    duration:
      fast: 400
      normal: 500
      slow: 600
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  sections:
    - "Clay Navigation"
    - "Soft Hero"
    - "Problem Cards"
    - "Value Proposition"
    - "Feature Blobs"
    - "How It Works"
    - "Trust Section"
    - "Pricing Clay Cards"
    - "FAQ"
    - "Tactile CTA"
    - "Footer"
\`\`\``,
    },
};
