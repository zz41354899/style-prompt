import type { StyleModule, ModuleMap } from './modules';
import { styles } from './styles';
import { styleDNAConfigs } from './styleConfigs';
import { industryModules } from './industryConfigs';
import { useModules } from './useConfigs';

// Auto-generate all Style modules
export const styleModules: Record<string, StyleModule> = styles.reduce((acc, style) => {
  const config = styleDNAConfigs[style.id] || {
    paletteStrategy: 'Varies by style',
    typography: 'Varies by style',
    radiusPolicy: 'Varies by style',
    shadowPolicy: 'Varies by style',
    borderLanguage: 'Varies by style',
    patterns: 'Varies by style',
    motion: 'Varies by style',
  };

  acc[style.id] = {
    id: style.id,
    name: style.name,
    type: 'style',
    content: `## Style DNA (${style.id} — ${style.name})

### Style Seeds
- **Palette strategy:** ${config.paletteStrategy}
- **Typography:** ${config.typography}
- **Radius policy:** ${config.radiusPolicy}
- **Shadow policy:** ${config.shadowPolicy}
- **Border language:** ${config.borderLanguage}
- **Patterns/textures:** ${config.patterns}
- **Motion:** ${config.motion}`,
    dna: `## Style DNA (${style.id} – ${style.name})

### Style Seeds
- **Palette strategy:** ${config.paletteStrategy}
- **Typography:** ${config.typography}
- **Radius policy:** ${config.radiusPolicy}
- **Shadow policy:** ${config.shadowPolicy}
- **Border language:** ${config.borderLanguage}
- **Patterns/textures:** ${config.patterns}
- **Motion:** ${config.motion}
${config.tokens ? `

### Design Tokens (YAML)
${config.tokens}` : ''}`
  };
  return acc;
}, {} as Record<string, StyleModule>);

// Re-export industry and use modules
export { industryModules } from './industryConfigs';
export { useModules } from './useConfigs';

// Export all modules
export const modules: ModuleMap = {
  styles: styleModules,
  industries: industryModules,
  uses: useModules,
};
