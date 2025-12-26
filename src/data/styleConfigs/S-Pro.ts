import type { StyleDNAConfig } from './types';

// Pro 版用進階風格配置 (S01-S10 的 Pro 版本)
// 基於規格書 s_01_tech_minimal_saa_s_landing_page_design_spec.md 的完整結構
export const S_Pro_Configs: Record<string, StyleDNAConfig> = {
    'S01-Pro': {
        paletteStrategy: 'Neutral grays with single brand accent. Background primary #FFFFFF, secondary #F9FAFB. Brand primary #2563EB.',
        typography: 'Inter as primary sans-serif. Font scale: H1 48/56/650, H2 32/40/650, H3 20/28/600, Body 16/24/450. Letter spacing: tight (-0.02), normal (0).',
        radiusPolicy: 'Consistent small-medium radius. sm: 10px, md: 14px, lg: 18px.',
        shadowPolicy: 'Minimal elevation. soft: 0 1px 2px rgba(15, 23, 42, 0.06). No heavy shadows.',
        borderLanguage: 'Subtle borders using #E2E8F0. Strong borders #CBD5E1. 1px width for most.',
        patterns: 'None. Pure minimalism with typography-led hierarchy.',
        motion: 'Subtle transitions. Duration fast 140ms, normal 220ms. Easing cubic-bezier(0.2, 0, 0, 1).',
        dos: [
            'Use clean lines and ample whitespace',
            'Keep typography simple with Inter font',
            'Use subtle animations respecting reduced-motion',
            'Maintain WCAG AA contrast ratios',
            'Implement 12-column grid system',
            'Use semantic HTML with proper heading hierarchy'
        ],
        donts: [
            'Don\'t use excessive decorations or shadows',
            'Don\'t overcrowd the layout with information',
            'Don\'t use more than 3 neutral + 1 accent color',
            'Don\'t use animations exceeding 220ms'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S01-Pro"
    style_name: "Tech Minimal Pro"
    industry: "AI SaaS"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F9FAFB"
      elevated: "#FFFFFF"
    border:
      subtle: "#E2E8F0"
      strong: "#CBD5E1"
    text:
      primary: "#0F172A"
      secondary: "#475569"
      muted: "#94A3B8"
      inverse: "#FFFFFF"
    brand:
      primary: "#2563EB"
      primaryHover: "#1D4ED8"
      primaryActive: "#1E40AF"
    status:
      success: "#16A34A"
      warning: "#F59E0B"
      danger: "#DC2626"
  typography:
    fontFamily:
      sans: "Inter, ui-sans-serif, system-ui"
      mono: "ui-monospace, SFMono-Regular, Menlo"
    scale:
      h1: { size: 48, line: 56, weight: 650 }
      h2: { size: 32, line: 40, weight: 650 }
      h3: { size: 20, line: 28, weight: 600 }
      body: { size: 16, line: 24, weight: 450 }
      small: { size: 14, line: 20, weight: 450 }
    letterSpacing:
      tight: -0.02
      normal: 0
  radius:
    sm: 10
    md: 14
    lg: 18
  shadow:
    none: "none"
    soft: "0 1px 2px rgba(15, 23, 42, 0.06)"
  spacing:
    gridMax: 1120
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 88
      tablet: 72
      mobile: 56
  motion:
    duration:
      fast: 140
      normal: 220
    easing: "cubic-bezier(0.2, 0, 0, 1)"
  breakpoints:
    mobile: 480
    tablet: 768
    desktop: 1024
    wide: 1280
  sections:
    - "Global Navigation"
    - "Hero Section"
    - "Problem/Tension"
    - "Value Proposition"
    - "System Overview"
    - "Bento Grid"
    - "Core Capabilities"
    - "How It Works"
    - "Trust & Proof"
    - "Integrations"
    - "Use Cases"
    - "Pricing"
    - "CTA"
    - "Footer"
\`\`\``,
    },

    'S02-Pro': {
        paletteStrategy: 'Pure black and white with occasional gray. No colors except black accent.',
        typography: 'Playfair Display for headlines. Bold editorial fonts with strong size contrast.',
        radiusPolicy: 'Sharp corners (0-2px). Architectural precision.',
        shadowPolicy: 'None or hard shadows only. 4px 4px 0 #000000.',
        borderLanguage: 'Thick black rules (2-3px). Strong dividers.',
        patterns: 'None. Typography is the pattern.',
        motion: 'Minimal. Instant or very quick transitions (0-100ms).',
        dos: [
            'Use strong black and white contrast',
            'Emphasize typography hierarchy',
            'Use bold editorial layouts',
            'Keep imagery minimal or remove entirely'
        ],
        donts: [
            'Don\'t use colors unless intentional',
            'Don\'t add unnecessary decorative elements',
            'Don\'t use rounded corners',
            'Don\'t use playful animations'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S02-Pro"
    style_name: "Minimalist Monochrome Pro"
    industry: "Creative Agency"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#F5F5F5"
      elevated: "#FFFFFF"
    border:
      subtle: "#E0E0E0"
      strong: "#000000"
    text:
      primary: "#000000"
      secondary: "#333333"
      muted: "#666666"
      inverse: "#FFFFFF"
    brand:
      primary: "#000000"
  typography:
    fontFamily:
      serif: "Playfair Display, Georgia, serif"
      sans: "Inter, system-ui, sans-serif"
    scale:
      h1: { size: 72, line: 80, weight: 700 }
      h2: { size: 48, line: 56, weight: 700 }
      h3: { size: 32, line: 40, weight: 600 }
      body: { size: 18, line: 28, weight: 400 }
  radius:
    none: 0
    sm: 0
    md: 2
  shadow:
    none: "none"
    hard: "4px 4px 0 #000000"
  sections:
    - "Navigation"
    - "Hero"
    - "Services Grid"
    - "Portfolio Showcase"
    - "Process Steps"
    - "Testimonials"
    - "Contact CTA"
    - "Footer"
\`\`\``,
    },

    'S03-Pro': {
        paletteStrategy: 'Primary colors only (red #E53935, blue #1565C0, yellow #F9A825) on white/black. No gradients.',
        typography: 'Geometric sans-serif (Bebas Neue). Bold weights. Grid-aligned.',
        radiusPolicy: 'Zero radius. All rectangles.',
        shadowPolicy: 'None. Flat color blocks only.',
        borderLanguage: 'Thick black lines (2-8px). Grid dividers.',
        patterns: 'Color block compositions. Asymmetric grids.',
        motion: 'Stiff, mechanical. Linear easing.',
        dos: [
            'Use primary colors (red, blue, yellow)',
            'Create grid-based compositions',
            'Use thick black lines',
            'Keep shapes geometric and rectangular'
        ],
        donts: [
            'Don\'t use gradients',
            'Don\'t use curves or organic shapes',
            'Don\'t mix too many colors',
            'Don\'t break the grid structure'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S03-Pro"
    style_name: "Mondrian Pro"
    industry: "Design Studio"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F8F4E3"
      elevated: "#FFFFFF"
    text:
      primary: "#1a1a1a"
      inverse: "#FFFFFF"
    brand:
      red: "#E53935"
      blue: "#1565C0"
      yellow: "#F9A825"
    border:
      strong: "#000000"
  typography:
    fontFamily:
      display: "Bebas Neue, Impact, sans-serif"
      body: "Inter, system-ui, sans-serif"
  radius:
    none: 0
  border:
    width:
      thin: 2
      medium: 4
      thick: 8
  sections:
    - "Navigation"
    - "Hero Grid"
    - "Philosophy Section"
    - "Works Gallery"
    - "Color Blocks Features"
    - "Team Section"
    - "Contact Grid"
    - "Footer"
\`\`\``,
    },

    'S04-Pro': {
        paletteStrategy: 'Limited monochromatic with red accent (#E53935). Clean whites and grays.',
        typography: 'Helvetica Neue. Strict hierarchy. Grid-aligned text.',
        radiusPolicy: 'Zero to minimal (0-4px).',
        shadowPolicy: 'None. Rely on spacing and typography.',
        borderLanguage: 'Thin rules for structure. Grid lines.',
        patterns: 'Grid systems. Mathematical proportions.',
        motion: 'Precise and functional. Ease timing (100-150ms).',
        dos: [
            'Use grid systems rigorously (12-column)',
            'Emphasize sans-serif typography',
            'Use asymmetric layouts',
            'Keep design clean and functional'
        ],
        donts: [
            'Don\'t use decorative fonts',
            'Don\'t ignore the grid',
            'Don\'t use excessive imagery',
            'Don\'t add unnecessary ornamentation'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S04-Pro"
    style_name: "Swiss Pro"
    industry: "Typography Studio"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4A4A"
    brand:
      primary: "#E53935"
  typography:
    fontFamily:
      primary: "Helvetica Neue, Helvetica, Arial, sans-serif"
  layout:
    grid:
      columns: 12
      gutter: 24
  sections:
    - "Grid Navigation"
    - "Hero Typography"
    - "Grid Gallery"
    - "Type Specimen"
    - "Manifesto"
    - "Services Grid"
    - "Client Logos"
    - "Footer Grid"
\`\`\``,
    },

    'S05-Pro': {
        paletteStrategy: 'Raw colors. High contrast. #FFFFFF background with blue #0000FF and red #FF0000 accents.',
        typography: 'System fonts or monospace (Courier). Large sizes. Bold weights.',
        radiusPolicy: 'Zero. No rounding anywhere.',
        shadowPolicy: 'None or harsh offset shadows (8px 8px 0 #000000).',
        borderLanguage: 'Thick visible borders (2-6px). Raw HTML aesthetic.',
        patterns: 'None or intentionally crude.',
        motion: 'Abrupt or none. step-end easing.',
        dos: [
            'Use raw, unpolished aesthetics',
            'Embrace bold typography',
            'Use high contrast',
            'Be intentionally unconventional'
        ],
        donts: [
            'Don\'t over-polish the design',
            'Don\'t use subtle effects',
            'Don\'t follow conventional layouts',
            'Don\'t use soft colors'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S05-Pro"
    style_name: "Brutalist Pro"
    industry: "Creative"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#FFFFFF"
      secondary: "#EEEEEE"
    text:
      primary: "#000000"
    brand:
      primary: "#0000FF"
      accent: "#FF0000"
  typography:
    fontFamily:
      primary: "Courier New, Courier, monospace"
  sections:
    - "Raw Navigation"
    - "Bold Hero"
    - "Broken Grid"
    - "Manifesto"
    - "Works List"
    - "Contact Form"
    - "Raw Footer"
\`\`\``,
    },

    'S06-Pro': {
        paletteStrategy: 'Neon colors (cyan #00FFFF, magenta #FF00FF, yellow #FFFF00) on dark #0A0A0F. Glowing effects.',
        typography: 'Futuristic fonts (Orbitron). Glowing text effects with text-shadow.',
        radiusPolicy: 'Mixed. Sharp for panels (0px), rounded for buttons (4-12px).',
        shadowPolicy: 'Neon glows. 0 0 20px [color].',
        borderLanguage: 'Glowing borders. Circuit-like patterns.',
        patterns: 'Grid lines, circuit patterns, glitch effects.',
        motion: 'Glitch effects. Fast erratic (150-300ms). ease-in-out.',
        dos: [
            'Use neon colors on dark backgrounds',
            'Add glitch effects sparingly',
            'Use futuristic typography',
            'Create depth with layers and glows'
        ],
        donts: [
            'Don\'t use warm natural colors',
            'Don\'t use traditional layouts',
            'Don\'t make it too clean or polished',
            'Don\'t forget the tech aesthetic'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S06-Pro"
    style_name: "Cyberpunk Pro"
    industry: "Gaming/Tech"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0A0A0F"
      secondary: "#12121A"
    text:
      primary: "#FFFFFF"
      secondary: "#00FFFF"
    brand:
      primary: "#00FFFF"
      secondary: "#FF00FF"
      accent: "#FFFF00"
  typography:
    fontFamily:
      display: "Orbitron, Rajdhani, sans-serif"
      mono: "Share Tech Mono, Fira Code, monospace"
  shadow:
    neon_cyan: "0 0 20px #00FFFF"
    neon_magenta: "0 0 20px #FF00FF"
  sections:
    - "Glitch Navigation"
    - "Neon Hero"
    - "Tech Grid"
    - "Data Dashboard"
    - "Features Matrix"
    - "Testimonials"
    - "Pricing Cards"
    - "Contact Terminal"
    - "Footer"
\`\`\``,
    },

    'S07-Pro': {
        paletteStrategy: 'Synthwave palette. Purple/pink/cyan gradients on dark background. Sunset vibes.',
        typography: 'Retro display fonts. Bold outlines. VHS aesthetic.',
        radiusPolicy: 'Mixed. Large radius for buttons and cards.',
        shadowPolicy: 'Colored glows. Neon pink and cyan.',
        borderLanguage: 'Gradient borders. Outlined text.',
        patterns: 'Perspective grid. Sunset gradients. Scanlines.',
        motion: 'Smooth with hover glows. 200-300ms.',
        dos: [
            'Use purple/pink/cyan color scheme',
            'Create sunset/horizon effects',
            'Use grid perspective backgrounds',
            'Add neon glow effects'
        ],
        donts: [
            'Don\'t use flat/modern minimalist style',
            'Don\'t forget the retro aesthetic',
            'Don\'t use standard corporate colors',
            'Don\'t skip the gradient backgrounds'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S07-Pro"
    style_name: "Synthwave Pro"
    industry: "Entertainment"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#1A0A2E"
      secondary: "#2D1B4E"
    text:
      primary: "#FFFFFF"
      glow: "#FF00FF"
    brand:
      primary: "#FF00FF"
      secondary: "#00FFFF"
      gradient: "linear-gradient(135deg, #FF00FF, #00FFFF)"
  patterns:
    grid: "perspective"
    sunset: "radial-gradient"
  sections:
    - "Retro Navigation"
    - "Sunset Hero"
    - "Features Grid"
    - "Stats Section"
    - "Gallery"
    - "CTA Section"
    - "Footer"
\`\`\``,
    },

    'S08-Pro': {
        paletteStrategy: 'Vintage 70s colors. Orange, brown, mustard, cream. Paper texture.',
        typography: 'Retro serif fonts. Display typography. Magazine style.',
        radiusPolicy: 'Varied. Some sharp, some rounded for organic feel.',
        shadowPolicy: 'Paper shadows. Subtle depth.',
        borderLanguage: 'Torn edges. Paper cutout effects.',
        patterns: 'Grain texture. Paper texture. Halftone dots.',
        motion: 'Minimal. Subtle page turn effects.',
        dos: [
            'Use warm retro color palette',
            'Add paper/grain texture',
            'Use vintage typography',
            'Create magazine-style layouts'
        ],
        donts: [
            'Don\'t use digital/modern colors',
            'Don\'t forget texture overlays',
            'Don\'t use clean modern fonts',
            'Don\'t skip the nostalgic feel'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S08-Pro"
    style_name: "Retro 70s Zine Pro"
    industry: "Editorial"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5E6D3"
      paper: "#FFF9F0"
    text:
      primary: "#3D2914"
      accent: "#D4622B"
    brand:
      orange: "#D4622B"
      brown: "#8B4513"
      mustard: "#DAA520"
  texture:
    grain: "noise overlay"
    paper: "paper texture"
  sections:
    - "Zine Navigation"
    - "Editorial Hero"
    - "Feature Story"
    - "Photo Essay"
    - "Pull Quote"
    - "Grid Layout"
    - "Colophon Footer"
\`\`\``,
    },

    'S09-Pro': {
        paletteStrategy: 'Soft neutral background #E4E9F0. Subtle color variations for depth.',
        typography: 'Rounded sans-serif fonts. Soft, friendly appearance.',
        radiusPolicy: 'Large radius (16-24px). Soft rounded corners everywhere.',
        shadowPolicy: 'Neumorphic shadows. Convex: outer shadows. Concave: inner shadows.',
        borderLanguage: 'Minimal borders. Rely on shadows for definition.',
        patterns: 'None. Shape-based depth.',
        motion: 'Smooth, subtle press effects. 150-200ms.',
        dos: [
            'Use soft, diffused shadows',
            'Create raised/pressed button states',
            'Use large rounded corners',
            'Keep colors soft and neutral'
        ],
        donts: [
            'Don\'t use hard edges',
            'Don\'t use high contrast colors',
            'Don\'t forget the tactile feel',
            'Don\'t use flat design'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S09-Pro"
    style_name: "Neumorphism Pro"
    industry: "App Showcase"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#E4E9F0"
      secondary: "#E8EDF4"
    text:
      primary: "#4A5568"
      secondary: "#718096"
  shadow:
    convex: "8px 8px 15px #c8ccd4, -8px -8px 15px #ffffff"
    concave: "inset 4px 4px 8px #c8ccd4, inset -4px -4px 8px #ffffff"
  radius:
    default: 20
    button: 16
    card: 24
  sections:
    - "Soft Navigation"
    - "Hero Card"
    - "Features Grid"
    - "Stats Section"
    - "Testimonials"
    - "Pricing"
    - "Contact Form"
    - "Footer"
\`\`\``,
    },

    'S10-Pro': {
        paletteStrategy: 'Luxury dark #0C0C0C or clean white #FAFAF8. Gold accent #9A8866.',
        typography: 'Elegant serif fonts (Playfair Display). Large whitespace. Refined hierarchy.',
        radiusPolicy: 'Minimal radius (2-6px). Elegant precision.',
        shadowPolicy: 'Subtle, refined shadows. Light gold tints.',
        borderLanguage: 'Thin gold lines. Elegant separators.',
        patterns: 'None. Whitespace is the pattern.',
        motion: 'Smooth, elegant transitions. 200-300ms. ease-out.',
        dos: [
            'Use generous whitespace',
            'Emphasize elegant serif typography',
            'Use gold accents sparingly',
            'Create high-end magazine feel'
        ],
        donts: [
            'Don\'t overcrowd with elements',
            'Don\'t use cheap-looking colors',
            'Don\'t use playful or casual fonts',
            'Don\'t skip the luxury details'
        ],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S10-Pro"
    style_name: "Luxury Editorial Pro"
    industry: "Fashion/Luxury"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#0C0C0C"
      secondary: "#FAFAF8"
    text:
      primary: "#FFFFFF"
      secondary: "#9A8866"
    brand:
      gold: "#9A8866"
      cream: "#FAFAF8"
  typography:
    fontFamily:
      serif: "Playfair Display, Georgia, serif"
      sans: "Inter, system-ui, sans-serif"
    scale:
      h1: { size: 64, line: 72, weight: 400 }
      h2: { size: 48, line: 56, weight: 400 }
  spacing:
    large_whitespace: true
  sections:
    - "Elegant Navigation"
    - "Hero Editorial"
    - "Brand Story"
    - "Collection Grid"
    - "Testimonials"
    - "Contact"
    - "Footer"
\`\`\``,
    },
};
