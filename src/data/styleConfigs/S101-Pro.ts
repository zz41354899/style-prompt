import type { StyleDNAConfig } from './types';

// Pro 版進階風格配置 (S101)
export const S101_Pro_Configs: Record<string, StyleDNAConfig> = {
  'S101-Pro': {
    paletteStrategy: 'Immersive ink wash universe. Deep rice paper #F5F0E8 to aged xuan paper #E8DFD0 gradient backgrounds. Multi-layered ink tones from jet black #0D0D0D through charcoal #2C2C2C to misty gray #C8BFB0. Vermillion seal red #C41E3A as sacred accent. Subtle gold leaf #B8963E for luxury details. Indigo #2B4570 undertones for depth.',
    typography: 'Primary: Noto Serif SC for headings with dramatic weight contrast. LXGW WenKai for elegant body text. Display sizes up to 72px for hero sections. Vertical text option for decorative elements. Letter-spacing tuned for Chinese characters (+0.04em).',
    radiusPolicy: 'Strictly minimal (0-4px). Sharp scroll-edge corners. Brush-clipped shapes for feature cards.',
    shadowPolicy: 'Multi-layer ink diffusion: inner subtle wash + outer bleed. Layered shadows simulating ink on wet paper. Seal stamp emboss effect for accent elements.',
    borderLanguage: 'Calligraphic brush strokes — varying thickness (1-6px). Tapered ink line dividers. Double-line classical frame borders for featured sections.',
    patterns: 'Layered rice paper grain texture. Animated ink splash on scroll. Mountain mist parallax backgrounds. Bamboo forest silhouettes. Cloud/mist (雲霧) overlays. Plum blossom (梅花) scattered decorations. Traditional lattice (窗花) patterns for section dividers.',
    motion: 'Brush stroke drawing animations (SVG path) 600-1200ms. Ink wash dissolve transitions. Mist/fog parallax drift. Seal stamp press-in effect on hover. Scroll-triggered mountain reveal. Ink drip loading indicators.',
    dos: [
      'Use layered ink wash gradients with multiple opacity stops',
      'Apply authentic rice paper (宣紙) texture with grain detail',
      'Use vermillion red sparingly — only for seals, CTAs, and key accents',
      'Master 留白 (negative space) as the primary design principle',
      'Add brush stroke SVG animations for section reveals',
      'Use traditional Chinese decorative motifs (梅蘭竹菊)',
      'Implement mountain silhouette parallax backgrounds',
      'Add ink splash micro-interactions on hover/click',
      'Use classical Chinese frame borders for featured content',
      'Include seal stamp (印章) elements for branding',
      'Layer mist/fog effects for depth and atmosphere',
      'Use gold leaf accents for premium sections'
    ],
    donts: [
      'Don\'t use saturated modern UI colors — stay within ink palette',
      'Don\'t use rounded pill shapes — keep sharp, angular edges',
      'Don\'t overcrowd layout — 留白 is the soul of ink wash design',
      'Don\'t use sans-serif as primary display font',
      'Don\'t add glassmorphism or modern translucency',
      'Don\'t use drop shadows — only ink diffusion shadows',
      'Don\'t mix Western decorative elements with ink wash',
      'Don\'t use gradient text — keep text solid ink black or vermillion'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S101-Pro"
    style_name: "Chinese Ink Wash Pro"
    industry: "Culture/Art/Luxury"
    use_case: "Full Landing Page"
  color:
    background:
      primary: "#F5F0E8"
      secondary: "#EDE7DB"
      paper: "#FAF7F0"
      aged_paper: "#E8DFD0"
      dark_ink: "#1A1614"
    text:
      primary: "#0D0D0D"
      secondary: "#3A3530"
      muted: "#7A7468"
      light: "#B0A89A"
    brand:
      primary: "#0D0D0D"
      accent: "#C41E3A"
      seal: "#C41E3A"
      gold: "#B8963E"
      indigo: "#2B4570"
    surface:
      card: "#FFFDF7"
      card_alt: "#F8F3EA"
      overlay_light: "rgba(26, 26, 26, 0.03)"
      overlay_medium: "rgba(26, 26, 26, 0.06)"
    ink:
      jet: "#0D0D0D"
      dark: "#1A1A1A"
      charcoal: "#2C2C2C"
      medium: "#4A4A4A"
      light: "#8A8478"
      wash: "#B0A89A"
      faint: "rgba(26, 26, 26, 0.06)"
      splash: "rgba(26, 26, 26, 0.15)"
    border:
      strong: "#1A1A1A"
      medium: "rgba(26, 26, 26, 0.2)"
      subtle: "rgba(26, 26, 26, 0.1)"
      brush: "rgba(26, 26, 26, 0.25)"
      frame: "#2C2C2C"
      gold: "rgba(184, 150, 62, 0.4)"
    state:
      success: "#4A7A49"
      warning: "#B08A2A"
      error: "#C41E3A"
      info: "#2B4570"
    focus:
      ring: "rgba(26, 26, 26, 0.3)"
  radius:
    none: 0
    sm: 2
    md: 4
    lg: 8
  border:
    width:
      hairline: 1
      thin: 2
      medium: 3
      brush: 4
      heavy_brush: 6
  shadow:
    ink_faint: "0 2px 12px rgba(26, 26, 26, 0.04)"
    ink_soft: "0 4px 20px rgba(26, 26, 26, 0.08)"
    ink_medium: "0 8px 32px rgba(26, 26, 26, 0.12)"
    ink_strong: "0 12px 48px rgba(26, 26, 26, 0.18)"
    ink_bleed: "0 0 24px rgba(26, 26, 26, 0.1)"
    seal_emboss: "inset 0 2px 4px rgba(196, 30, 58, 0.15), 0 1px 2px rgba(196, 30, 58, 0.1)"
  backdrop:
    paper_grain: "url('/textures/rice-paper.png')"
    mist: "blur(8px)"
  layout:
    container:
      content: 1080
      wide: 1200
      narrow: 800
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
    gutter:
      mobile: 16
      tablet: 20
      desktop: 24
  motion:
    duration:
      instant: 100
      fast: 300
      normal: 600
      slow: 1000
      dramatic: 1500
    easing:
      default: "cubic-bezier(0.4, 0, 0.2, 1)"
      brush: "cubic-bezier(0.22, 1, 0.36, 1)"
      ink_spread: "cubic-bezier(0.0, 0.0, 0.2, 1)"
      bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  typography:
    font:
      serif:
        primary: "Noto Serif SC"
        fallback:
          - "LXGW WenKai"
          - "STSong"
          - "SimSun"
          - "serif"
      display:
        primary: "LXGW WenKai"
        fallback:
          - "Noto Serif SC"
          - "KaiTi"
          - "serif"
      sans:
        primary: "Noto Sans SC"
        fallback:
          - "PingFang SC"
          - "Microsoft YaHei"
          - "sans-serif"
    scale:
      display: { size: 72, line: 96, weight: 900, tracking: 0.04 }
      h1: { size: 56, line: 76, weight: 700, tracking: 0.04 }
      h2: { size: 40, line: 56, weight: 700, tracking: 0.03 }
      h3: { size: 28, line: 40, weight: 600, tracking: 0.02 }
      h4: { size: 22, line: 32, weight: 600, tracking: 0.02 }
      body_lg: { size: 18, line: 32, weight: 400, tracking: 0.02 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
      caption: { size: 12, line: 20, weight: 400, tracking: 0.01 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 128]
    gridMax: 1200
    gutter:
      desktop: 24
      tablet: 20
      mobile: 16
    sectionY:
      desktop: 96
      tablet: 72
      mobile: 56
  sections:
    - "Navigation with seal logo"
    - "Hero with ink wash mountain backdrop"
    - "Philosophy / Vision statement"
    - "Feature showcase with brush stroke reveals"
    - "Gallery with ink splash transitions"
    - "Testimonials on scroll paper cards"
    - "Pricing with seal stamp accents"
    - "FAQ with classical frame borders"
    - "CTA with vermillion accent"
    - "Footer with landscape silhouette"
\`\`\``,
  },
};
