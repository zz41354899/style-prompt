export interface StyleData {
  id: string;
  name: string;
  description: string;
  prompt?: string;
  tier?: 'free' | 'pro';
}

// Helper to check if a style has Pro version available (S01-S10 have Pro versions)
export const hasProVersion = (id: string): boolean => {
  const num = parseInt(id.replace('S', ''), 10);
  return num >= 1 && num <= 10;
};

// For backward compatibility - returns 'free' for all styles in normal mode
export const getStyleTier = (id: string): 'free' | 'pro' => {
  return 'free'; // All styles are free by default
};

export const styles: StyleData[] = [
  {
    id: 'S01',
    name: 'Tech Minimal',
    description: 'Tech minimal style, clean and sleek interface design',
  },
  {
    id: 'S02',
    name: 'Minimalist Monochrome',
    description: 'Minimalist black and white editorial style, emphasizing typography and contrast',
  },
  {
    id: 'S03',
    name: 'Mondrian / De Stijl',
    description: 'Mondrian style, geometric color blocks and straight lines composition',
  },
  {
    id: 'S04',
    name: 'Swiss / International Typographic',
    description: 'Swiss International Typographic style, grid systems and sans-serif typography',
  },
  {
    id: 'S05',
    name: 'Brutalist',
    description: 'Brutalist, raw, bold, and unadorned design',
  },
  {
    id: 'S06',
    name: 'Cyberpunk',
    description: 'Cyberpunk, neon lights and futuristic tech aesthetic',
  },
  {
    id: 'S07',
    name: 'Retro 80s (Synthwave)',
    description: '80s retro synthwave, gradient neons and grid patterns',
  },
  {
    id: 'S08',
    name: 'Retro 60s–70s (Print Grain)',
    description: '60s-70s print style, vintage colors and grain texture',
  },
  {
    id: 'S09',
    name: 'Memphis',
    description: 'Memphis design, geometric shapes and vibrant colors',
  },
  {
    id: 'S10',
    name: 'Luxury Editorial',
    description: 'Luxury editorial style, elegant serif fonts and refined typography',
  },
  {
    id: 'S11',
    name: 'Japanese Minimal',
    description: 'Japanese minimalism, white space aesthetics and zen design',
  },
  {
    id: 'S12',
    name: 'Nature Organic',
    description: 'Natural organic style, soft curves and earth tone colors',
  },
  {
    id: 'S13',
    name: 'Material-ish',
    description: 'Material Design style, shadow layers and color systems',
  },
  {
    id: 'S14',
    name: 'Glassmorphism',
    description: 'Glassmorphism, frosted glass effects and transparent layers',
  },
  {
    id: 'S15',
    name: 'Neumorphism',
    description: 'Neumorphism design, soft shadows and embossed effects',
  },
  {
    id: 'S16',
    name: 'Terminal / Hacker',
    description: 'Terminal style, green text and hacker aesthetic',
  },
  {
    id: 'S17',
    name: 'Bauhaus Modernism',
    description: 'Bauhaus style, geometric forms and functional design',
  },
  {
    id: 'S18',
    name: 'Retro Pixel UI',
    description: 'Retro Pixel UI style, 8-bit aesthetic with pixel grid and dither vibes',
  },
  {
    id: 'S19',
    name: 'Aesthetic Harmony',
    description: 'Aesthetic-Usability Effect style, refined elegance with soft gradients and micro-interactions',
  },
  {
    id: 'S20',
    name: 'Aurora Borealis',
    description: 'Northern Lights style, flowing aurora gradients with ethereal glow effects',
  },
  {
    id: 'S21',
    name: 'Claymorphism',
    description: 'Soft clay-like design with tactile shadows and rounded forms',
  },
  {
    id: 'S22',
    name: 'Dark Mode Elegance',
    description: 'Sophisticated dark theme with high contrast and subtle glows',
  },
  {
    id: 'S23',
    name: 'Doodle Sketch',
    description: 'Playful crayon-style design with hand-drawn elements and soft colors',
  },
  {
    id: 'S24',
    name: 'Minimalist Line Art',
    description: 'Clean line-based design with geometric precision and negative space',
  },
  // Batch 5: Paper & Retro
  {
    id: 'S25',
    name: 'Paper Craft',
    description: 'Tearing effects, shadow layers, cut-out aesthetic',
  },
  {
    id: 'S26',
    name: 'Flat 2.0',
    description: 'Material 3 vibes, updated flat design with subtle depth',
  },
  {
    id: 'S27',
    name: 'Y2K Aesthetic',
    description: 'Chrome text, blobs, 2000s futurity',
  },
  {
    id: 'S28',
    name: 'Solarpunk',
    description: 'Eco-futurism, green technology, organic curves',
  },
  {
    id: 'S29',
    name: 'Art Deco',
    description: '1920s luxury, gold lines, geometric patterns',
  },
  {
    id: 'S30',
    name: 'Industrial',
    description: 'Concrete textures, yellow/black caution, brutalist utility',
  },
  // Batch 6: Tech & Classic
  {
    id: 'S31',
    name: 'Skeuomorphic',
    description: 'Leather stitching, realistic textures',
  },
  {
    id: 'S32',
    name: 'Windows 95',
    description: 'Classic OS gray buttons, bevels, pixel fonts',
  },
  {
    id: 'S33',
    name: 'Liquid Metal',
    description: 'Fluid chrome, mercury effects',
  },
  {
    id: 'S34',
    name: 'Holographic',
    description: 'Iridescent gradients, foil textures',
  },
  {
    id: 'S35',
    name: 'Blueprint',
    description: 'Technical drawing, blue background, white lines',
  },
  {
    id: 'S36',
    name: 'Chalkboard',
    description: 'Hand-drawn sketchy look, black board',
  },
  // Batch 7: Print & Media
  {
    id: 'S37',
    name: 'Newspaper',
    description: 'Classic newspaper layout with columns, serif typography, and editorial design',
  },
  {
    id: 'S38',
    name: 'Magazine',
    description: 'Fashion magazine style with bold typography and editorial photography layouts',
  },
  {
    id: 'S39',
    name: 'Comic Book',
    description: 'Dynamic comic book panels with halftone patterns and bold action typography',
  },
  {
    id: 'S40',
    name: 'Postcard',
    description: 'Vintage postcard aesthetic with stamps, handwritten fonts, and travel theme',
  },
  {
    id: 'S41',
    name: 'Polaroid',
    description: 'Instant photo style with photo stacks, handwritten captions, and memory board aesthetic',
  },
  {
    id: 'S42',
    name: 'Ticket Stub',
    description: 'Event ticket design with perforated edges, seat numbers, and barcode aesthetics',
  },
  // Batch 8: 3D & Abstract
  {
    id: 'S43',
    name: 'Low Poly',
    description: '3D geometric triangles, faceted look',
  },
  {
    id: 'S44',
    name: 'Isometric',
    description: '3D isometric grid layout with geometric shapes and depth',
  },
  {
    id: 'S45',
    name: 'Voxel',
    description: '3D pixel cubes, Minecraft-style blocky aesthetic',
  },
  {
    id: 'S46',
    name: 'Abstract Memphis',
    description: 'Playful geometric shapes, bold colors, and 1980s Memphis design influence',
  },
  {
    id: 'S47',
    name: 'Brutalist 3D',
    description: 'Raw industrial style with 3D depth, concrete textures, and bold geometry',
  },
  {
    id: 'S48',
    name: 'Fluid 3D',
    description: 'Flowing liquid metal effects with dark background and animated blobs',
  },
  // Batch 9: Art & Illustration
  {
    id: 'S49',
    name: 'Watercolor',
    description: 'Artistic watercolor style with paint splashes, soft gradients, and organic shapes',
  },
  {
    id: 'S50',
    name: 'Collage',
    description: 'Mixed media collage with torn paper, stickers, and layered visual elements',
  },
  {
    id: 'S51',
    name: 'Hand Drawn',
    description: 'Sketchy hand-drawn style with notebook paper, wobbly borders, and doodle elements',
  },
  {
    id: 'S52',
    name: 'Pop Art',
    description: 'Bold comic-style design with halftone patterns, vibrant colors, and hard shadows',
  },
  {
    id: 'S53',
    name: 'Graffiti',
    description: 'Street art aesthetic with spray paint effects, neon glow, and urban typography',
  },
  {
    id: 'S54',
    name: 'Art Nouveau',
    description: 'Elegant flowing lines, floral motifs, and gold accents inspired by Alphonse Mucha',
  },
  // Batch 10: Nature & Geography
  {
    id: 'S55',
    name: 'Oceanic',
    description: 'Deep sea aesthetic with floating bubbles, glass panels, and underwater glow',
  },
  {
    id: 'S56',
    name: 'Forest',
    description: 'Deep forest aesthetic with organic textures and natural green tones',
  },
  {
    id: 'S57',
    name: 'Desert',
    description: 'Sand tones, orange gradients, arid landscape aesthetic',
  },
  {
    id: 'S58',
    name: 'Polar',
    description: 'Arctic ice theme with cool blues, aurora effects, and crystalline textures',
  },
  {
    id: 'S59',
    name: 'Jungle',
    description: 'Lush tropical jungle with dense foliage, exotic plants, and wildlife',
  },
  {
    id: 'S60',
    name: 'Volcanic',
    description: 'Molten lava aesthetic with fiery red/orange gradients and dramatic contrasts',
  },
  // Batch 11: Materials & Textures
  {
    id: 'S61',
    name: 'Leather',
    description: 'Stitched edges, textured backgrounds',
  },
  {
    id: 'S62',
    name: 'Denim',
    description: 'Jean fabric texture, stitching',
  },
  {
    id: 'S63',
    name: 'Brushed Steel',
    description: 'Industrial metal texture with brushed finish and reflective highlights',
  },
  {
    id: 'S64',
    name: 'Carbon Fiber',
    description: 'High-tech woven pattern with dark glossy finish and premium feel',
  },
  {
    id: 'S65',
    name: 'Stained Glass',
    description: 'Colorful glass panels with dark lead lines and luminous glow',
  },
  {
    id: 'S66',
    name: 'Knitwear',
    description: 'Cozy knitted texture with warm patterns and soft fabric feel',
  },
  // Batch 12: Sci-Fi & Fantasy
  {
    id: 'S67',
    name: 'Cybernetic',
    description: 'Futuristic tech interface with glowing circuits and augmented reality elements',
  },
  {
    id: 'S68',
    name: 'Steampunk',
    description: 'Victorian-era industrial with brass gears, clockwork, and mechanical elements',
  },
  {
    id: 'S69',
    name: 'Alien',
    description: 'Extraterrestrial aesthetic with bioluminescent effects and otherworldly textures',
  },
  {
    id: 'S70',
    name: 'Fantasy',
    description: 'Magical realm aesthetic with ethereal glow, mystical elements, and enchanted nature',
  },
  {
    id: 'S71',
    name: 'Wasteland',
    description: 'Post-apocalyptic aesthetic with rusted textures, survival elements, and dystopian vibes',
  },
  {
    id: 'S72',
    name: 'Starship',
    description: 'Space vessel interior with holographic displays, metallic surfaces, and sci-fi controls',
  },
  // Batch 13: Classic Art
  {
    id: 'S73',
    name: 'Impressionist',
    description: 'Painterly brush strokes, soft color blending, and artistic texture',
  },
  {
    id: 'S74',
    name: 'Cubist',
    description: 'Fragmented geometric forms with multiple perspectives and abstract shapes',
  },
  {
    id: 'S75',
    name: 'Surrealist',
    description: 'Dreamy, weird juxtapositions',
  },
  {
    id: 'S76',
    name: 'Renaissance',
    description: 'Classical art aesthetic with parchment texture, elegant proportions, and timeless beauty',
  },
  {
    id: 'S77',
    name: 'Ukiyo-e',
    description: 'Traditional Japanese woodblock print style with bold outlines and flat colors',
  },
  {
    id: 'S78',
    name: 'Gothic',
    description: 'Dark ornate aesthetic with pointed arches, dramatic shadows, and medieval elements',
  },
  // Batch 14: Corporate & Industry
  {
    id: 'S79',
    name: 'Corporate Clean',
    description: 'Stripe/SaaS generic, very safe',
  },
  {
    id: 'S80',
    name: 'Startup Vibrant',
    description: 'Gradient text, rounded buttons',
  },
  {
    id: 'S81',
    name: 'Enterprise Blue',
    description: 'Trustworthy, conservative',
  },
  {
    id: 'S82',
    name: 'Fintech Trust',
    description: 'Purple/Green, data-heavy',
  },
  {
    id: 'S83',
    name: 'Health / Medical',
    description: 'Teal/White, clean, sterile',
  },
  {
    id: 'S84',
    name: 'Eco / Green',
    description: 'Sustainable, leaves, earth tones',
  },
  // Batch 15: Vibrant & Luxury
  {
    id: 'S85',
    name: 'Kids / Playful',
    description: 'Rounded, primary colors, big buttons',
  },
  {
    id: 'S86',
    name: 'Gamer / RGB',
    description: 'Red/Black + RGB lighting',
  },
  {
    id: 'S87',
    name: 'Luxury Gold',
    description: 'Black & Gold, serif fonts',
  },
  {
    id: 'S88',
    name: 'Luxury Silver',
    description: 'White & Silver, platinum look',
  },
  {
    id: 'S89',
    name: 'Minimalist Serif',
    description: 'Kinfolk style, elegant',
  },
  {
    id: 'S90',
    name: 'Brutalist Color',
    description: 'Colorful anti-design, clashing colors',
  },
  // Batch 16: Digital & Data
  {
    id: 'S91',
    name: 'E-ink',
    description: 'High contrast grayscale, paper display',
  },
  {
    id: 'S92',
    name: 'OLED',
    description: 'Pure black backgrounds, vibrant accents',
  },
  {
    id: 'S93',
    name: 'Terminal Retro',
    description: 'Amber screen (variant of S16)',
  },
  {
    id: 'S94',
    name: 'Code Editor',
    description: 'VS Code / Dracula theme colors',
  },
  {
    id: 'S95',
    name: 'Data Dashboard',
    description: 'Dense data grids, charts',
  },
  {
    id: 'S96',
    name: 'HUD',
    description: 'Heads Up Display, sci-fi overlays',
  },
  // Batch 17: Final Polish
  {
    id: 'S97',
    name: 'Frosted Glass (Strong)',
    description: 'Heavy blur, iOS style',
  },
  {
    id: 'S98',
    name: 'Acrylic',
    description: 'Windows Fluent Design, translucent',
  },
  {
    id: 'S99',
    name: 'Material 3',
    description: 'Pastel colors, dynamic rounding',
  },
  {
    id: 'S100',
    name: 'The Ultimate',
    description: 'A "Meta" style combining elements effectively',
  },
];
