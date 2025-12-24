
import { StyleDNAConfig } from './index';

export const S85_S90_Configs: Record<string, StyleDNAConfig> = {
    // S85: Kids / Playful
    S85: {
        paletteStrategy: 'Primary colors (Red, Yellow, Blue), bright, high saturation.',
        typography: 'Nunito, Comic Neue, or rounded sans-serif.',
        radiusPolicy: 'Large, exaggerated rounded corners (24px-32px).',
        shadowPolicy: 'Hard distinct shadows, non-blurred.',
        borderLanguage: 'Thick black or colored outlines.',
        patterns: 'Doodles, squiggles, confetti.',
        motion: 'Bouncy, elastic, fun.',
        dos: ['Use bright colors', 'Big buttons', 'Playful icons', 'Simple language'],
        donts: ['Don\'t be serious', 'Don\'t use small text', 'Don\'t use sharp corners'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S85"
    style_name: "Kids Playful"
  color:
    bg:
      primary: "#FFF9C4"
    accent:
      primary: "#FF5252"
      secondary: "#448AFF"
\`\`\``,
    },

    // S86: Gamer / RGB
    S86: {
        paletteStrategy: 'Black background, neon RGB (Red, Green, Blue) accents.',
        typography: 'Orbitron, Rajdhani, or aggressive futuristic sans.',
        radiusPolicy: 'Sharp angles, cut corners.',
        shadowPolicy: 'Neon glows, colored drop shadows.',
        borderLanguage: 'glowing borders, tech lines.',
        patterns: 'Hexagons, circuit lines, carbon fiber.',
        motion: 'Fast, glitchy, high refresh rate feel.',
        dos: ['Use dark mode', 'RGB lighting', 'Aggressive shapes', 'High contrast'],
        donts: ['Don\'t be subtle', 'Don\'t use pastel', 'Don\'t look "corporate"'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S86"
    style_name: "Gamer RGB"
  color:
    bg:
      primary: "#050505"
    accent:
      primary: "#FF0055"
      secondary: "#00FFDD"
\`\`\``,
    },

    // S87: Luxury Gold
    S87: {
        paletteStrategy: 'Black, Gold, Rich dark textures.',
        typography: 'Playfair Display, Cinzel, or elegant serif.',
        radiusPolicy: 'Sharp or very slightly rounded (1px-2px).',
        shadowPolicy: 'Subtle ambient glows, gold reflections.',
        borderLanguage: 'Thin gold framing lines.',
        patterns: 'Marble, damask, subtle noise.',
        motion: 'Slow, elegant, fade-ins.',
        dos: ['Use gold', 'Serif fonts', 'Minimal layout', 'High quality imagery'],
        donts: ['Don\'t be cheap', 'Don\'t clutter', 'Don\'t use bright primary colors'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S87"
    style_name: "Luxury Gold"
  color:
    bg:
      primary: "#0F0F0F"
    accent:
      primary: "#D4AF37"
      secondary: "#F4E08B"
\`\`\``,
    },

    // S88: Luxury Silver
    S88: {
        paletteStrategy: 'White, Silver, Platinum, Cool Greys.',
        typography: 'Montserrat, Lato (Ultralight weights).',
        radiusPolicy: 'Clean sharp edges.',
        shadowPolicy: 'Cool soft shadows, metallic sheen.',
        borderLanguage: 'Silver foil lines.',
        patterns: 'Subtle gradients, linen texture.',
        motion: 'Smooth, fluid, polished.',
        dos: ['Look expensive', 'Use whitespace', 'Cool tones', 'Silver gradients'],
        donts: ['Don\'t use gold', 'Don\'t be warm', 'Don\'t be heavy'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S88"
    style_name: "Luxury Silver"
  color:
    bg:
      primary: "#FAFAFA"
    accent:
      primary: "#C0C0C0"
      secondary: "#E0E0E0"
\`\`\``,
    },

    // S89: Minimalist Serif (Kinfolk)
    S89: {
        paletteStrategy: 'Beige, Cream, Soft Brown, Charcoal.',
        typography: 'Beautiful serif headings, clean sans body.',
        radiusPolicy: 'Zero radius or very slight.',
        shadowPolicy: 'None or very subtle.',
        borderLanguage: 'None, relies on spacing.',
        patterns: 'Botanic photography, paper texture.',
        motion: 'Slow aesthetic fades.',
        dos: ['Use big photography', 'Serif titles', 'Lots of breathing room', 'Editorial'],
        donts: ['Don\'t clutter', 'Don\'t use bright colors', 'Don\'t be techy'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S89"
    style_name: "Minimalist Serif"
  color:
    bg:
      primary: "#F9F7F2"
    accent:
      primary: "#4A4036"
\`\`\``,
    },

    // S90: Brutalist Color
    S90: {
        paletteStrategy: 'Clashing colors (Pink/Green, Blue/Orange), high saturation.',
        typography: 'Bold grotesque sans, massive sizes.',
        radiusPolicy: 'Zero radius.',
        shadowPolicy: 'Hard solid black shadows.',
        borderLanguage: 'Thick black borders (3px+).',
        patterns: 'Grid lines, raw HTML elements.',
        motion: 'Jerky, instant, hover effects.',
        dos: ['Be bold', 'Clash colors', 'Use borders', 'Anti-design'],
        donts: ['Don\'t be subtle', 'Don\'t use gradients', 'Don\'t be "pretty"'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S90"
    style_name: "Brutalist Color"
  color:
    bg:
      primary: "#FFEB3B"
    accent:
      primary: "#000000"
      secondary: "#FF00FF"
\`\`\``,
    },
};
