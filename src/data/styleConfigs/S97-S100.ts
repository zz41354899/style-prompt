
import { StyleDNAConfig } from './index';

export const S97_S100_Configs: Record<string, StyleDNAConfig> = {
    // S97: Frosted Glass
    S97: {
        paletteStrategy: 'Pastel gradients background, white semi-transparent surfaces.',
        typography: 'Modern sans-serif (Inter/SF Pro).',
        radiusPolicy: 'Large (24px).',
        shadowPolicy: 'Soft diffuse shadows.',
        borderLanguage: '1px solid white/20.',
        patterns: 'Blur, noise.',
        motion: 'Floating, slow drifts.',
        dos: ['Use backdrop-filter', 'White text shadows', 'Gradients', 'Clean'],
        donts: ['Don\'t be opaque', 'Don\'t use sharp corners', 'Don\'t use heavy borders'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S97"
    style_name: "Frosted Glass"
  color:
    bg:
      primary: "linear-gradient(135deg, #E0C3FC, #8EC5FC)"
    accent:
      primary: "rgba(255, 255, 255, 0.4)"
\`\`\``,
    },

    // S98: Acrylic
    S98: {
        paletteStrategy: 'Dark/Light adaptive, noise texture overlay.',
        typography: 'Segoe UI / System default.',
        radiusPolicy: 'Medium (8px).',
        shadowPolicy: 'Elevation shadows.',
        borderLanguage: 'None or very subtle.',
        patterns: 'Mica, acrylic noise.',
        motion: 'Fast, responsive.',
        dos: ['Use texture', 'Blur', 'System fonts', 'Adaptive'],
        donts: ['Don\'t use solid flat colors', 'Don\'t be flashy', 'Don\'t block background'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S98"
    style_name: "Acrylic Fluid"
  color:
    bg:
      primary: "#202020"
    accent:
      primary: "#60CDFF"
\`\`\``,
    },

    // S99: Material 3
    S99: {
        paletteStrategy: 'Dynamic color extraction from wallpaper.',
        typography: 'Roboto Flex / Google Sans.',
        radiusPolicy: 'Pill shapes, large rounded corners.',
        shadowPolicy: 'Tonal surface colors, no drop shadows.',
        borderLanguage: 'None.',
        patterns: 'Ripple effects.',
        motion: 'Transforming containers.',
        dos: ['Use tonal palettes', 'Pills', 'Ripples', 'Google Sans'],
        donts: ['Don\'t use pure black', 'Don\'t use sharp corners', 'Don\'t use drop shadows'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S99"
    style_name: "Material You"
  color:
    bg:
      primary: "#FFFBFE"
    accent:
      primary: "#6750A4"
      secondary: "#625B71"
\`\`\``,
    },

    // S100: The Ultimate
    S100: {
        paletteStrategy: 'Holographic, iridescent, deep black.',
        typography: 'Futuristic wide sans.',
        radiusPolicy: 'Variable.',
        shadowPolicy: 'Glowing, multi-colored.',
        borderLanguage: 'Animated borders.',
        patterns: '3D depth, parallax.',
        motion: 'Complex, physics-based.',
        dos: ['Be awesome', 'Use 3D', 'Holographic', 'Interactive'],
        donts: ['Don\'t be boring', 'Don\'t be static', 'Don\'t be flat'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S100"
    style_name: "The Ultimate"
  color:
    bg:
      primary: "#000000"
    accent:
      primary: "linear-gradient(45deg, #FF0080, #7928CA, #FF0080)"
\`\`\``,
    },
};
