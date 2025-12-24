
import { StyleDNAConfig } from './index';

export const S91_S96_Configs: Record<string, StyleDNAConfig> = {
    // S91: E-ink
    S91: {
        paletteStrategy: 'Strict grayscale, high contrast black/white.',
        typography: 'Serif for body (Merriweather), Sans for UI.',
        radiusPolicy: 'Minimal (2px) or none.',
        shadowPolicy: 'None, uses borders.',
        borderLanguage: '1px solid black.',
        patterns: 'Dithering, paper texture.',
        motion: 'Stepped update, slow refresh feel.',
        dos: ['Use high contrast', 'Black on white', 'Serif fonts', 'Minimal UI'],
        donts: ['Don\'t use color', 'Don\'t be blurry', 'Don\'t use gradients'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S91"
    style_name: "E-ink Paper"
  color:
    bg:
      primary: "#F5F5F5"
    accent:
      primary: "#000000"
\`\`\``,
    },

    // S92: OLED
    S92: {
        paletteStrategy: 'Pure #000000 background, vibrant neon accents.',
        typography: 'Modern sans-serif (Inter/Roboto).',
        radiusPolicy: 'Rounded (12px).',
        shadowPolicy: 'Colored glow shadows.',
        borderLanguage: 'None or glowing.',
        patterns: 'Dot matrix, gradients.',
        motion: 'Smooth, fluid, 60fps.',
        dos: ['Use pure black', 'Vibrant colors', 'Dark mode', 'Clean'],
        donts: ['Don\'t use grey background', 'Don\'t be dull', 'Don\'t cluster'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S92"
    style_name: "OLED Black"
  color:
    bg:
      primary: "#000000"
    accent:
      primary: "#2979FF"
      secondary: "#FF4081"
\`\`\``,
    },

    // S93: Terminal Retro
    S93: {
        paletteStrategy: 'Black background, Amber or Green text.',
        typography: 'Monospace (VT323, Fira Code).',
        radiusPolicy: 'Zero radius.',
        shadowPolicy: 'CRT glow.',
        borderLanguage: 'Block characters, ASCII borders.',
        patterns: 'Scanlines, noise.',
        motion: 'Typing effects, blinking cursor.',
        dos: ['Use monospace', 'Amber color', 'Scanlines', 'Retro vibe'],
        donts: ['Don\'t use sans-serif', 'Don\'t be high res', 'Don\'t use white'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S93"
    style_name: "Terminal Retro"
  color:
    bg:
      primary: "#111111"
    accent:
      primary: "#FFB000"
\`\`\``,
    },

    // S94: Code Editor
    S94: {
        paletteStrategy: 'Dark blue-grey (Dracula/Nord), pastel syntax colors.',
        typography: 'Fira Code, JetBrains Mono.',
        radiusPolicy: 'Small radius (4px).',
        shadowPolicy: 'Deep ambient shadows.',
        borderLanguage: 'Left border accents.',
        patterns: 'Line numbers, syntax highlighting.',
        motion: 'Fast, efficient.',
        dos: ['Use syntax colors', 'Monospace', 'Dark theme', 'Clean'],
        donts: ['Don\'t be bright', 'Don\'t use serif', 'Don\'t be cluttered'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S94"
    style_name: "Code Editor"
  color:
    bg:
      primary: "#282A36"
    accent:
      primary: "#BD93F9"
      secondary: "#50FA7B"
\`\`\``,
    },

    // S95: Data Dashboard
    S95: {
        paletteStrategy: 'Low contrast greys, specific data colors.',
        typography: 'Condensed sans (Roboto Condensed).',
        radiusPolicy: 'Small radius (2px).',
        shadowPolicy: 'None or card outlines.',
        borderLanguage: '1px divider lines.',
        patterns: 'Grids, charts, dense data.',
        motion: 'Instant.',
        dos: ['Dense info', 'Clear hierarchy', 'Data viz', 'Neutral background'],
        donts: ['Don\'t use space waste', 'Don\'t be decorative', 'Don\'t use large text'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S95"
    style_name: "Data Dashboard"
  color:
    bg:
      primary: "#212121"
    accent:
      primary: "#2196F3"
      secondary: "#4CAF50"
\`\`\``,
    },

    // S96: HUD
    S96: {
        paletteStrategy: 'Transparent, cyan/blue, white.',
        typography: 'Technical sans (Eurostile, Rajdhani).',
        radiusPolicy: 'Angled corners (45deg cuts).',
        shadowPolicy: 'Text shadows/glows.',
        borderLanguage: 'Brackets, aim sights.',
        patterns: 'Crosshairs, ticks, circles.',
        motion: 'Sliding, locking, targeting.',
        dos: ['Use transparency', 'Technical look', 'Cyan/Blue', 'Overlays'],
        donts: ['Don\'t be opaque', 'Don\'t be organic', 'Don\'t rely on background'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S96"
    style_name: "SciFi HUD"
  color:
    bg:
      primary: "transparent"
    accent:
      primary: "#00E5FF"
\`\`\``,
    },
};
