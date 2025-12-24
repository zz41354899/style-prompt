import type { StyleDNAConfig } from './types';

export const S55_S60_Configs: Record<string, StyleDNAConfig> = {
    'S55': {
        paletteStrategy: 'Deep blues, teals, foam whites.',
        typography: 'Fluid rounded sans-serif.',
        radiusPolicy: 'Rounded fluid shapes.',
        shadowPolicy: 'Soft blue glows, caustic light effects.',
        borderLanguage: 'None or translucent white.',
        patterns: 'Wave patterns, bubbles, caustic noises.',
        motion: 'Floating, swaying, ripple effects.',
        dos: ['Use gradients', 'Mimic water physics', 'Keep it cool', 'Use transparency'],
        donts: ['Don\'t use sharp corners', 'Don\'t use dry colors', 'Don\'t be static'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S55"
    style_name: "Oceanic"
  color:
    bg:
      primary: "#001e2b"
    accent:
      cyan: "#00f0ff"
      foam: "#ffffff"
\`\`\``,
    },
    'S56': {
        paletteStrategy: 'Forest greens, earthy browns, sun rays.',
        typography: 'Rustic serif or rounded organic.',
        radiusPolicy: 'Organic roughness or soft curves.',
        shadowPolicy: 'Dappled light shadows.',
        borderLanguage: 'Wood texture borders.',
        patterns: 'Leaf veins, wood grain, foliage.',
        motion: 'Gentle sway, rustling.',
        dos: ['Use textures', 'Feel organic', 'Layer depth', 'Use green heavily'],
        donts: ['Don\'t look plastic', 'Don\'t use neon', 'Don\'t align perfectly'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S56"
    style_name: "Forest"
  color:
    bg:
      primary: "#1a2f1c"
    accent:
      green: "#4caf50"
      wood: "#8d6e63"
\`\`\``,
    },
    'S57': {
        paletteStrategy: 'Warm sands, oranges, scorched reds, bright sky blue.',
        typography: 'Weathered or sharp sans.',
        radiusPolicy: 'Eroded edges.',
        shadowPolicy: 'Hard hot shadows.',
        borderLanguage: 'None or slight dust.',
        patterns: 'Dunes, heat haze, cracks.',
        motion: 'Shimmering heat, wind blowing sand.',
        dos: ['Use warm gradients', 'Feel dry', 'High contrast', 'Minimalism'],
        donts: ['Don\'t use cool colors (except sky)', 'Don\'t look wet', 'Don\'t clutter'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S57"
    style_name: "Desert"
  color:
    bg:
      primary: "#f4a460"
    accent:
      sun: "#ffeb3b"
      sky: "#29b6f6"
\`\`\``,
    },
    'S58': {
        paletteStrategy: 'Icy whites, pale cyans, deep freeze blues.',
        typography: 'Sharp, crystalline fonts.',
        radiusPolicy: 'Sharp jagged edges or smooth ice.',
        shadowPolicy: 'Reflective, glass-like properties.',
        borderLanguage: 'White frost borders.',
        patterns: 'Ice crystals, snowflakes, frost.',
        motion: 'Slow freeze, shatter effects.',
        dos: ['Use frost textures', 'Be bright', 'Sharp angles', 'Translucency'],
        donts: ['Don\'t use warm colors', 'Don\'t be soft/fuzzy', 'Don\'t be dark'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S58"
    style_name: "Polar"
  color:
    bg:
      primary: "#e0f7fa"
    accent:
      ice: "#ffffff"
      deep: "#0277bd"
\`\`\``,
    },
    'S59': {
        paletteStrategy: 'Vibrant tropical greens, exotic flower pinks/yellows.',
        typography: 'Exotic display fonts.',
        radiusPolicy: 'Big organic curves.',
        shadowPolicy: 'Deep canopy shadows.',
        borderLanguage: 'Leaf outlines.',
        patterns: 'Monstera leaves, tiger stripes.',
        motion: 'Grow in, bounce.',
        dos: ['Be lush', 'Oversaturated colors', 'Dense layout', 'Exotic vibes'],
        donts: ['Don\'t be sparse', 'Don\'t be dull', 'Don\'t be techy'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S59"
    style_name: "Jungle"
  color:
    bg:
      primary: "#004d40"
    accent:
      leaf: "#00e676"
      flower: "#ff4081"
\`\`\``,
    },
    'S60': {
        paletteStrategy: 'Charcoal blacks, magma reds, ash greys.',
        typography: 'Bold, cracked or burnt fonts.',
        radiusPolicy: 'Jagged rock edges.',
        shadowPolicy: 'Inner glow (magma).',
        borderLanguage: 'Cracked earth.',
        patterns: 'Lava flow, rock texture, smoke.',
        motion: 'Slow flow, particle embers.',
        dos: ['High contrast', 'Dark mode', 'Glowing elements', 'Texture heavy'],
        donts: ['Don\'t use water colors', 'Don\'t be clean', 'Don\'t be friendly'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S60"
    style_name: "Volcanic"
  color:
    bg:
      primary: "#212121"
    accent:
      magma: "#ff3d00"
      ash: "#9e9e9e"
\`\`\``,
    },
};

export const S61_S66_Configs: Record<string, StyleDNAConfig> = {
    'S61': {
        paletteStrategy: 'Rich tans, browns, stitching yellows.',
        typography: 'Debossed or stamped style font.',
        radiusPolicy: 'Rounded corners (leather patch).',
        shadowPolicy: 'Soft ambient occlusion.',
        borderLanguage: 'Stitched dashed lines.',
        patterns: 'Leather grain.',
        motion: 'Tactile press.',
        dos: ['Use stitch effects', 'Leather texture', 'Gold/Brass accents', 'Warmth'],
        donts: ['Don\'t look flat', 'Don\'t look plastic', 'Don\'t use neon'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S61"
    style_name: "Leather"
  color:
    bg:
      primary: "#5d4037"
    accent:
      tan: "#d7ccc8"
      thread: "#fdd835"
\`\`\``,
    },
    'S62': {
        paletteStrategy: 'Indigo blues, white stitching, copper rivets.',
        typography: 'Bold slab serif (label style).',
        radiusPolicy: 'Soft fabric folds.',
        shadowPolicy: 'Fabric shadows.',
        borderLanguage: 'Double stitched lines.',
        patterns: 'Denim twill.',
        motion: 'Instant snap.',
        dos: ['Use denim texture', 'Stitching', 'Rivets/Tags', 'Casual vibe'],
        donts: ['Don\'t look silky', 'Don\'t be too formal', 'Don\'t look synthetic'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S62"
    style_name: "Denim"
  color:
    bg:
      primary: "#1a237e"
    accent:
      fade: "#534bae"
      copper: "#bcaaa4"
\`\`\``,
    },
    'S63': {
        paletteStrategy: 'Silvers, greys, reflections.',
        typography: 'Industrial sans serif.',
        radiusPolicy: 'Micro-bevels.',
        shadowPolicy: 'Sharp metallic reflections.',
        borderLanguage: 'Beveled edges.',
        patterns: 'Brushed metal lines.',
        motion: 'Mechanical sliding.',
        dos: ['Look heavy', 'Reflective', 'Machined', 'Precision'],
        donts: ['Don\'t look soft', 'Don\'t look warm', 'Don\'t look organic'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S63"
    style_name: "Brushed Steel"
  color:
    bg:
      primary: "#cfd8dc"
    accent:
      shine: "#ffffff"
      shadow: "#546e7a"
\`\`\``,
    },
    'S64': {
        paletteStrategy: 'Black and dark grey weave.',
        typography: 'Race car digital font.',
        radiusPolicy: 'Sleek aerodynamic curves.',
        shadowPolicy: 'Subtle glossy highlights.',
        borderLanguage: 'Adhesive borders.',
        patterns: 'Carbon fiber weave.',
        motion: 'Fast, high FPS.',
        dos: ['Use the weave', 'High performance feel', 'Glossy finish', 'Sporty'],
        donts: ['Don\'t use bright backgrounds', 'Don\'t look heavy', 'Don\'t look retro'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S64"
    style_name: "Carbon Fiber"
  color:
    bg:
      primary: "#212121"
    accent:
      weave: "#424242"
      red: "#d50000"
\`\`\``,
    },
    'S65': {
        paletteStrategy: 'Vibrant translucent colors, black lead lines.',
        typography: 'Gothic or blackletter.',
        radiusPolicy: 'Sharp geometric glass panes.',
        shadowPolicy: 'Colored light projection.',
        borderLanguage: 'Thick black lead lines.',
        patterns: 'Mosaic, colored glass.',
        motion: 'Shine, light passing through.',
        dos: ['Use rich colors', 'Black outlines', 'Light effects', 'Artistic'],
        donts: ['Don\'t be dull', 'Don\'t be opaque', 'Don\'t use modern minimal'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S65"
    style_name: "Stained Glass"
  color:
    bg:
      primary: "#121212"
    accent:
      red: "#b71c1c"
      blue: "#0d47a1"
      yellow: "#fbc02d"
\`\`\``,
    },
    'S66': {
        paletteStrategy: 'Soft pastels, whites, gray textures.',
        typography: 'Rounded and cozy.',
        radiusPolicy: 'Very round.',
        shadowPolicy: 'Soft fabric occlusion.',
        borderLanguage: 'None or fuzzy.',
        patterns: 'Knitted loops, cloth grain.',
        motion: 'Squishy, soft.',
        dos: ['Feel comfy', 'Use pattern overlay', 'Soft colors', 'Hyge'],
        donts: ['Don\'t look hard', 'Don\'t look cold', 'Don\'t be sharp'],
        tokens: `\`\`\`yaml
tokens:
  meta:
    style_id: "S66"
    style_name: "Knitwear"
  color:
    bg:
      primary: "#fff9c4"
    accent:
      yarn: "#dce775"
      warm: "#ffab91"
\`\`\``,
    },
};
