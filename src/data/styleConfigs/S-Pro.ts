import type { StyleDNAConfig } from './types';
import { S01_S10_Pro_Configs } from './S01-S10-Pro';
import { S11_S21_Pro_Configs } from './S11-S21-Pro';
import { S22_S50_Pro_Configs } from './S22-S50-Pro';
import { S51_S100_Pro_Configs } from './S51-S100-Pro';

// Pro 版進階風格配置 - 統一匯出
// 包含 S01-S100 所有 Pro 風格配置
export const S_Pro_Configs: Record<string, StyleDNAConfig> = {
  ...S01_S10_Pro_Configs,
  ...S11_S21_Pro_Configs,
  ...S22_S50_Pro_Configs,
  ...S51_S100_Pro_Configs,
};

// 也導出各個拆分的配置以便單獨使用
export { S01_S10_Pro_Configs, S11_S21_Pro_Configs, S22_S50_Pro_Configs, S51_S100_Pro_Configs };
