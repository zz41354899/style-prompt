
import { StyleDNAConfig } from './index';

export const S79_S84_Configs: Record<string, StyleDNAConfig> = {
    // S79: Corporate Clean
    S79: {
        paletteStrategy: 'Safe reliable blue tones, white background, high contrast text.',
        typography: 'Inter or Roboto, clean sans-serif, legible.',
        radiusPolicy: 'Small consistent radius (4px).',
        shadowPolicy: 'Minimal or none, flat design.',
        borderLanguage: 'Subtle light grey borders.',
        patterns: 'Clean whitespace, consistent padding.',
        motion: 'Minimal, instant, efficient.',
        dos: ['Use blue/grey', 'Be structured', 'High readability', 'Professional'],
        donts: ['Don\'t be eclectic', 'Don\'t use neon', 'Don\'t be chaotic'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S79"
    style_name: "Corporate Clean"
  color:
    bg:
      primary: "#F4F4F4"
    accent:
      primary: "#0F62FE"
\`\`\``,
    },

    // S80: Startup Vibrant
    S80: {
        paletteStrategy: 'Blurple, cyan, gradients, high energy.',
        typography: 'Plus Jakarta Sans or modern geometric sans.',
        radiusPolicy: 'Full rounded pills (999px).',
        shadowPolicy: 'Soft colored shadows, elevation.',
        borderLanguage: 'None or gradient borders.',
        patterns: 'Mesh gradients, floating elements.',
        motion: 'Bouncy, smooth, playful.',
        dos: ['Use gradients', 'Rounded buttons', 'Energetic', 'Modern'],
        donts: ['Don\'t be dull', 'Don\'t be square', 'Don\'t use serif'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S80"
    style_name: "Startup Vibrant"
  color:
    bg:
      primary: "#FFFFFF"
    accent:
      primary: "#635BFF"
      secondary: "#00D4FF"
\`\`\``,
    },

    // S81: Enterprise Blue
    S81: {
        paletteStrategy: 'Navy blue, grey, information dense.',
        typography: 'Roboto or system fonts, compact.',
        radiusPolicy: 'Square or very small radius (2px).',
        shadowPolicy: 'Subtle functional shadows.',
        borderLanguage: 'hairline borders, dividers.',
        patterns: 'Data grids, dense tables.',
        motion: 'None or very fast.',
        dos: ['Information density', 'Blue header', 'Clear hierarchy', 'Trust'],
        donts: ['Don\'t use too much whitespace', 'Don\'t be playful', 'Don\'t hide data'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S81"
    style_name: "Enterprise Blue"
  color:
    bg:
      primary: "#F0F2F5"
    accent:
      primary: "#003366"
\`\`\``,
    },

    // S82: Fintech Trust
    S82: {
        paletteStrategy: 'Deep purple, growth green, navy.',
        typography: 'DM Sans, clean and modern.',
        radiusPolicy: 'Modern rounded corners (12px).',
        shadowPolicy: 'Clean sophisticated shadows.',
        borderLanguage: 'Thin light borders.',
        patterns: 'Clean cards, trust indicators.',
        motion: 'Secure, smooth transitions.',
        dos: ['Look secure', 'Use growth green', 'Clean lines', 'Trustworthy'],
        donts: ['Don\'t be risky', 'Don\'t be messy', 'Don\'t use red (unless error)'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S82"
    style_name: "Fintech Trust"
  color:
    bg:
      primary: "#FAFBFC"
    accent:
      primary: "#5A3EA8"
      secondary: "#00C08B"
\`\`\``,
    },

    // S83: Health Medical
    S83: {
        paletteStrategy: 'Teal, white, soft grey, sterile.',
        typography: 'Lato or humanist sans.',
        radiusPolicy: 'Soft approachable radius (16px).',
        shadowPolicy: 'Very soft diffuse shadows.',
        borderLanguage: 'None or very subtle.',
        patterns: 'Clean waves, circles.',
        motion: 'Gentle, reassuring.',
        dos: ['Look clean', 'Use teal/cyan', 'Comforting', 'Professional'],
        donts: ['Don\'t be dark', 'Don\'t be sharp', 'Don\'t look dirty'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S83"
    style_name: "Health Medical"
  color:
    bg:
      primary: "#F5FCFB"
    accent:
      primary: "#00BFA5"
\`\`\``,
    },

    // S84: Eco Green
    S84: {
        paletteStrategy: 'Forest green, earth brown, leaf light green.',
        typography: 'Nunito or rounded sans.',
        radiusPolicy: 'Organic shapes, leaf corners.',
        shadowPolicy: 'Natural soft shadows.',
        borderLanguage: 'None or thick organic strokes.',
        patterns: 'Leaf textures, wood grain.',
        motion: 'Organic, growing, wind.',
        dos: ['Use nature colors', 'Leaf shapes', 'Sustainable vibes', 'Organic'],
        donts: ['Don\'t look plastic', 'Don\'t use industrial colors', 'Don\'t be sharp'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S84"
    style_name: "Eco Green"
  color:
    bg:
      primary: "#F1F8E9"
    accent:
      primary: "#2E7D32"
      secondary: "#8D6E63"
\`\`\``,
    },
};
