
import { StyleDNAConfig } from './index';

export const S101_Configs: Record<string, StyleDNAConfig> = {
  // S101: Chinese Ink Wash (中國水墨)
  S101: {
    paletteStrategy: 'Ink wash palette. Rice paper white #F5F0E8 background. Ink black #1A1A1A strokes with varying opacity. Vermillion seal red #C41E3A accent. Muted ink gray gradient from #2C2C2C to #B0A89A.',
    typography: 'Chinese calligraphic serif (Noto Serif SC, LXGW WenKai). Elegant vertical rhythm. Large display with brush stroke feel.',
    radiusPolicy: 'Minimal radius (0-4px). Prefer sharp edges evoking paper and scroll aesthetics.',
    shadowPolicy: 'Ink diffusion shadows — soft blurred edges like wet ink bleeding on rice paper.',
    borderLanguage: 'Thin ink stroke borders (1px). Brush-style dividers with taper effect.',
    patterns: 'Rice paper texture overlay. Ink splash decorations. Mountain silhouette backgrounds. Bamboo, plum blossom motifs.',
    motion: 'Brush stroke reveal animations. Ink wash fade-in 400-800ms. Scroll-inspired parallax.',
    dos: [
      'Use ink wash gradients (black to transparent)',
      'Apply rice paper texture backgrounds',
      'Use vermillion red for accent/seal elements',
      'Embrace generous white space (留白)',
      'Add brush stroke decorative elements',
      'Use traditional Chinese typography hierarchy'
    ],
    donts: [
      'Don\'t use saturated modern colors',
      'Don\'t use rounded pill buttons',
      'Don\'t overcrowd the layout — respect 留白',
      'Don\'t use sans-serif as primary font',
      'Don\'t add glossy or glass effects'
    ],
    tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S101"
    style_name: "Chinese Ink Wash"
    industry: "Culture/Art"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#F5F0E8"
      secondary: "#EDE7DB"
      paper: "#FAF7F0"
    text:
      primary: "#1A1A1A"
      secondary: "#4A4540"
      muted: "#8A8478"
    brand:
      primary: "#1A1A1A"
      accent: "#C41E3A"
      seal: "#C41E3A"
    surface:
      card: "#FFFDF7"
      overlay: "rgba(26, 26, 26, 0.03)"
    ink:
      dark: "#1A1A1A"
      medium: "#4A4A4A"
      light: "#B0A89A"
      wash: "rgba(26, 26, 26, 0.08)"
    border:
      strong: "#1A1A1A"
      subtle: "rgba(26, 26, 26, 0.12)"
      brush: "rgba(26, 26, 26, 0.2)"
    state:
      success: "#5B8C5A"
      warning: "#C49A2A"
      error: "#C41E3A"
    focus:
      ring: "rgba(26, 26, 26, 0.4)"
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
      brush: 4
  shadow:
    ink_spread: "0 4px 20px rgba(26, 26, 26, 0.08)"
    ink_drop: "0 2px 8px rgba(26, 26, 26, 0.12)"
    soft: "0 1px 4px rgba(26, 26, 26, 0.06)"
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
      normal: 500
      slow: 800
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      serif:
        primary: "Noto Serif SC"
        fallback:
          - "LXGW WenKai"
          - "STSong"
          - "SimSun"
          - "serif"
      sans:
        primary: "Noto Sans SC"
        fallback:
          - "PingFang SC"
          - "Microsoft YaHei"
          - "sans-serif"
    scale:
      h1: { size: 56, line: 76, weight: 700, tracking: 0.04 }
      h2: { size: 40, line: 56, weight: 700, tracking: 0.03 }
      h3: { size: 28, line: 40, weight: 600, tracking: 0.02 }
      body: { size: 16, line: 28, weight: 400, tracking: 0.02 }
      small: { size: 14, line: 24, weight: 400, tracking: 0.01 }
  spacing:
    base: 8
    section_py:
      mobile: [56, 72]
      desktop: [96, 128]
\`\`\``,
  },
};
