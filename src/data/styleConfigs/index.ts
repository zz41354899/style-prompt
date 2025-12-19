// 統一導出所有樣式配置
export type { StyleDNAConfig, StyleMeta, ColorTokens, TypographyTokens, SpaceTokens, RadiusTokens, ShadowTokens, BorderTokens, DesignTokens, StyleConfigsRecord } from './types';

// 導出各組配置
import { S01_S06_Configs } from './S01-S06';
import { S07_S12_Configs } from './S07-S12';
import { S13_S18_Configs } from './S13-S18';
import { S19_S24_Configs } from './S19-S24';
import type { StyleDNAConfig } from './types';

// 合併所有配置
export const styleDNAConfigs: Record<string, StyleDNAConfig> = {
  ...S01_S06_Configs,
  ...S07_S12_Configs,
  ...S13_S18_Configs,
  ...S19_S24_Configs,
};

// 導出各組配置（可選）
export { S01_S06_Configs, S07_S12_Configs, S13_S18_Configs, S19_S24_Configs };

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
