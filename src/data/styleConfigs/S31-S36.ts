import type { StyleDNAConfig } from './types';

export const S31_S36_Configs: Record<string, StyleDNAConfig> = {
    'S31': {
        paletteStrategy: 'Realistic textures: Leather (browns), Brushed Metal (silvers), Wood. High detailed gradients.',
        typography: 'Serif for elegance or systemic sans for UI elements. Embossed text effects.',
        radiusPolicy: 'Rounded corners realistic to materials (e.g. leather stitching).',
        shadowPolicy: 'Deep, realistic drop shadows and inner shadows to create volume.',
        borderLanguage: 'Stitching, bevels, metallic rims.',
        patterns: 'Leather grain, linen texture, brushed metal.',
        motion: 'Physical, heavy, mechanical transitions.',
        dos: ['Use realistic textures', 'Use inner shadows for depth', 'Mimic real-world mateirals', 'Pay attention to lighting direction'],
        donts: ['Don\'t use flat colors', 'Don\'t use impossible physics', 'Don\'t mix clashing materials', 'Don\'t ignore lighting consistency'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S31"
    style_name: "Skeuomorphic"
    industry: "SaaS"
    use_case: "Dashboard"
  color:
    bg:
      primary: "#E0E0E0" # Often a textured background
      secondary: "#D6D6D6"
    text:
      primary: "#2D2D2D"
      secondary: "#555555"
      embossed: "rgba(255,255,255,0.7)"
    brand:
      primary: "#8D6E63" # Leather tone
      secondary: "#607D8B" # Metal tone
  radius:
    sm: 4
    md: 8
    lg: 16
  shadow:
    pressed: "inset 2px 2px 5px rgba(0,0,0,0.2), inset -2px -2px 5px rgba(255,255,255,0.7)"
    raised: "2px 2px 5px rgba(0,0,0,0.2), -2px -2px 5px rgba(255,255,255,0.7)"
  typography:
    font:
      primary: "Helvetica Neue"
      secondary: "Georgia"
\`\`\``,
    },
    'S32': {
        paletteStrategy: 'Windows 95 Gray (#C0C0C0), Black, White, Navy Blue title bars.',
        typography: 'Pixelated sans-serif (MS Sans Serif) or System fonts.',
        radiusPolicy: 'Zero radius for windows, sligthly rounded for some modern interpretations but mostly sharp.',
        shadowPolicy: 'Classic bevels: Light top-left, dark bottom-right.',
        borderLanguage: 'Beveled edges (3D borders).',
        patterns: 'Dithered gradients, strict grids.',
        motion: 'Instant, snapping windows. No smooth reformations.',
        dos: ['Use #C0C0C0 background', 'Use beveled buttons', 'Use pixel fonts', 'Keep it nostalgic'],
        donts: ['Don\'t use smooth gradients', 'Don\'t use rounded corners (unless necessary)', 'Don\'t use transparency', 'Don\'t modernize it too much'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S32"
    style_name: "Windows 95"
  color:
    bg:
      primary: "#C0C0C0"
      secondary: "#FFFFFF"
      active: "#000080" # Navy Blue Title
    text:
      primary: "#000000"
      disabled: "#808080"
      inverse: "#FFFFFF"
    border:
      light: "#FFFFFF"
      shadow: "#808080"
      dark: "#000000"
  radius:
    none: 0
  shadow:
    out: "inset 1px 1px #dfdfdf, inset -1px -1px #000000, inset 2px 2px #ffffff, inset -2px -2px #808080"
    in: "inset 1px 1px #000000, inset -1px -1px #dfdfdf, inset 2px 2px #808080, inset -2px -2px #ffffff"
  typography:
    font:
      primary: "MS Sans Serif"
      fallback: ["Tahoma", "sans-serif"]
\`\`\``,
    },
    'S33': {
        paletteStrategy: 'Silver, Chrome, Mercury, iridescent highlights. Dark or reflective background.',
        typography: 'Bold, futuristic, liquid-like fonts.',
        radiusPolicy: 'Fluid, amorphous shapes. Blobs.',
        shadowPolicy: 'High contrast reflections, specular highlights.',
        borderLanguage: 'None, or defined by light reflections.',
        patterns: 'Ripples, distortions, refractions.',
        motion: 'Flowing, dripping, morphing.',
        dos: ['Use metallic gradients', 'Use fluid shapes', 'Simulate reflection', 'Keep it slick'],
        donts: ['Don\'t use rough textures', 'Don\'t use geometric grids', 'Don\'t make it static', 'Don\'t use flat colors'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S33"
    style_name: "Liquid Metal"
  color:
    bg:
      primary: "#000000"
      secondary: "#111111"
    text:
      primary: "#FFFFFF"
      secondary: "#AAAAAA"
    brand:
      primary: "#E0E0E0" # Silver
      secondary: "#A0A0A0"
  radius:
    fluid: "50% 30% 60% 40% / 40% 60% 40% 60%"
  shadow:
    metal: "inset 4px 4px 10px rgba(255,255,255,0.5), inset -4px -4px 10px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.2)"
  typography:
    font:
      primary: "Orbitron"
      secondary: "Rajdhani"
\`\`\``,
    },
    'S34': {
        paletteStrategy: 'Iridescent, pastel gradients (pink, cyan, purple), silver/white accents.',
        typography: 'Thin, modern sans-serif. Often white or holographic color.',
        radiusPolicy: 'Rounded, bubble-like.',
        shadowPolicy: 'Soft colored glows, pearl effects.',
        borderLanguage: 'Thin, glowing, or gradient borders.',
        patterns: 'Holographic foil textures, rainbows.',
        motion: 'Shimmering, tilting (parallax), floating.',
        dos: ['Use rainbow gradients', 'Use soft blurs', 'Simulate foil texture', 'Keep it ethereal'],
        donts: ['Don\'t use muddy colors', 'Don\'t use harsh blacks', 'Don\'t make it opaque', 'Don\'t be boring'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S34"
    style_name: "Holographic"
  color:
    bg:
      primary: "#F0F0F0"
      secondary: "#FFFFFF"
    text:
      primary: "#333333"
      secondary: "#666666"
    gradient:
      holo: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 20%, #E0C3FC 40%, #A6C1EE 60%, #BFE9FF 80%, #C2E9FB 100%)"
  radius:
    md: 12
    lg: 20
  shadow:
    holo: "0 10px 20px rgba(255, 105, 180, 0.2), 0 6px 6px rgba(0, 255, 255, 0.1)"
  typography:
    font:
      primary: "Montserrat"
      secondary: "Lato"
\`\`\``,
    },
    'S35': {
        paletteStrategy: 'Blueprint Blue (#0055AA), White lines. Technical high contrast.',
        typography: 'Technical lettering (hand-drawn technical or monospace).',
        radiusPolicy: 'Sharp or strictly geometric arcs.',
        shadowPolicy: 'None (flat) or schematic shading (hatching).',
        borderLanguage: 'White thin lines, dashed lines for hidden edges.',
        patterns: 'Grid paper, measurements, construction lines.',
        motion: 'Drawing effect, writing on path.',
        dos: ['Use blueprint blue', 'Use white lines', 'Show measurements', 'Make it look architectural'],
        donts: ['Don\'t use fills (mostly)', 'Don\'t use random colors', 'Don\'t ignore the grid', 'Don\'t make it messy'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S35"
    style_name: "Blueprint"
  color:
    bg:
      primary: "#0A4F8B" # Classic blueprint blue
      secondary: "#003366"
    text:
      primary: "#FFFFFF"
      secondary: "rgba(255,255,255,0.7)"
    border:
      primary: "#FFFFFF"
      secondary: "rgba(255,255,255,0.5)"
  radius:
    none: 0
    curve: 999
  border:
    style: "solid"
    secondary: "dashed"
  typography:
    font:
      primary: "Architects Daughter" # Or a technical font
      secondary: "Courier New"
\`\`\``,
    },
    'S36': {
        paletteStrategy: 'Chalkboard Green or Black, Chalk White, Pastel accent chalks.',
        typography: 'Handwritten chalk style. Rough edges.',
        radiusPolicy: 'Rough, hand-drawn circles and boxes.',
        shadowPolicy: 'Smudge effects, dust.',
        borderLanguage: 'Hand-drawn lines, varying width.',
        patterns: 'Chalk dust, eraser marks, blackboard texture.',
        motion: 'Writing, erasing, dusty transitions.',
        dos: ['Use chalkboard texture', 'Use handwritten fonts', 'Allow imperfections', 'Use chalk colors'],
        donts: ['Don\'t use vector-perfect lines', 'Don\'t use digital colors', 'Don\'t make it too clean', 'Don\'t forget the dust'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S36"
    style_name: "Chalkboard"
  color:
    bg:
      primary: "#2B3A42" # Blackboard grey-green
      secondary: "#1F2B32"
    text:
      primary: "#FFFFFF"
      secondary: "#E0E0E0"
    chalk:
      yellow: "#FDFD96"
      pink: "#F1CBFF"
      blue: "#A7C7E7"
  radius:
    hand: "255px 15px 225px 15px / 15px 225px 15px 255px"
  border:
    style: "solid" # Should be modified to look sketchy
  typography:
    font:
      primary: "Caveat"
      secondary: "Kalam"
\`\`\``,
    },
};
