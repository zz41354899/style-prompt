// 統一導出所有樣式配置
export type { StyleDNAConfig, StyleMeta, ColorTokens, TypographyTokens, SpaceTokens, RadiusTokens, ShadowTokens, BorderTokens, DesignTokens, StyleConfigsRecord } from './types';

// 導出各組配置
import { S01_S06_Configs } from './S01-S06';
import { S07_S12_Configs } from './S07-S12';
import { S13_S18_Configs } from './S13-S18';
import { S19_S24_Configs } from './S19-S24';
import { S25_S30_Configs } from './S25-S30';
import { S31_S36_Configs } from './S31-S36';
import { S37_S42_Configs } from './S37-S42';
import { S43_S48_Configs } from './S43-S48';
import { S49_S54_Configs } from './S49-S54';
import { S67_S72_Configs, S73_S78_Configs } from './S67-S78';
import { S79_S84_Configs } from './S79-S84';
import { S85_S90_Configs } from './S85-S90';
import { S91_S96_Configs } from './S91-S96';
import { S97_S100_Configs } from './S97-S100';
import type { StyleDNAConfig } from './types';

// 合併所有配置
const allConfigs = {
  ...S01_S06_Configs,
  ...S07_S12_Configs,
  ...S13_S18_Configs,
  ...S19_S24_Configs,
  ...S25_S30_Configs,
  ...S31_S36_Configs,
  ...S37_S42_Configs,
  ...S43_S48_Configs,
  ...S49_S54_Configs,
  ...S67_S72_Configs,
  ...S73_S78_Configs,
  ...S79_S84_Configs,
  ...S85_S90_Configs,
  ...S91_S96_Configs,
  ...S97_S100_Configs,
};

// 精選 30 個風格的 ID 列表與其原始配置 ID 的映射
const styleIdMapping: Record<string, string> = {
  'S01': 'S01', // Tech Minimal
  'S02': 'S02', // Minimalist Monochrome
  'S03': 'S03', // Swiss Design
  'S04': 'S04', // Brutalist
  'S05': 'S05', // Japanese Minimal
  'S06': 'S06', // Bauhaus
  'S07': 'S07', // Glassmorphism
  'S08': 'S08', // Dark Mode Elegance
  'S09': 'S09', // Corporate Clean
  'S10': 'S11', // Memphis
  'S11': 'S12', // Neo-Brutalism
  'S12': 'S13', // Doodle Sketch
  'S13': 'S15', // Art Deco
  'S14': 'S17', // Art Nouveau
  'S15': 'S18', // Gothic
  'S16': 'S19', // Cyberpunk
  'S17': 'S20', // Retro 80s (Synthwave)
  'S18': 'S22', // Y2K Aesthetic
  'S19': 'S25', // Luxury Editorial
  'S20': 'S26', // Nature Organic
  'S21': 'S27', // Solarpunk
  'S22': 'S29', // Luxury Gold
  'S23': 'S30', // Luxury Silver
  'S24': 'S31', // Minimalist Serif
  'S25': 'S32', // Startup Vibrant
  'S26': 'S33', // Enterprise Blue
  'S27': 'S34', // Fintech Trust
  'S28': 'S40', // Claymorphism
  'S29': 'S45', // Cyber-Bio Noir
  'S30': 'S46', // Aurora Borealis
};

// 只導出精選的 30 個風格配置
export const styleDNAConfigs: Record<string, StyleDNAConfig> = {};
Object.entries(styleIdMapping).forEach(([newId, sourceId]) => {
  const config = (allConfigs as any)[sourceId];
  if (config) {
    styleDNAConfigs[newId] = {
      ...config,
      // 確保 tokens 內的 ID 也被替換為正確的顯示 ID
      tokens: config.tokens?.replace(/style_id:\s*"S\d+"/, `style_id: "${newId}"`)
    };
  }
});

// 導出各組配置（可選）
export { S01_S06_Configs, S07_S12_Configs, S13_S18_Configs, S19_S24_Configs, S25_S30_Configs, S31_S36_Configs, S37_S42_Configs, S43_S48_Configs, S49_S54_Configs, S67_S72_Configs, S73_S78_Configs, S79_S84_Configs, S85_S90_Configs, S91_S96_Configs, S97_S100_Configs };

// 便利函數：獲取特定範圍的配置
export const getConfigsByRange = (start: string, end: string): Record<string, StyleDNAConfig> => {
  const configs: Record<string, StyleDNAConfig> = {};
  const startNum = parseInt(start.slice(1));
  const endNum = parseInt(end.slice(1));

  for (let i = startNum; i <= endNum; i++) {
    const key = `S${i.toString().padStart(2, '0')}`;
    if (styleDNAConfigs[key]) {
      configs[key] = styleDNAConfigs[key];
    }
  }

  return configs;
};

// 便利函數：獲取所有樣式 ID
export const getAllStyleIds = (): string[] => {
  return Object.keys(styleDNAConfigs);
};

// 便利函數：根據行業篩選配置
export const getConfigsByIndustry = (industry: string): Record<string, StyleDNAConfig> => {
  const configs: Record<string, StyleDNAConfig> = {};

  Object.entries(styleDNAConfigs).forEach(([key, config]) => {
    // 從 tokens 中提取行業信息
    const match = config.tokens?.match(/industry:\s*"([^"]+)"/);
    if (match && match[1] === industry) {
      configs[key] = config;
    }
  });

  return configs;
};

// 便利函數：獲取配置
export const getStyleConfig = (styleId: string): StyleDNAConfig | undefined => {
  return styleDNAConfigs[styleId];
};
