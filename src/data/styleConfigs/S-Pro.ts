import type { StyleDNAConfig } from './types';
import { S01_S10_Pro_Configs } from './S01-S10-Pro';
import { S11_S21_Pro_Configs } from './S11-S21-Pro';

// Pro 版進階風格配置 - 統一匯出
// 拆分為 S01-S10-Pro.ts 和 S11-S21-Pro.ts 以便管理
export const S_Pro_Configs: Record<string, StyleDNAConfig> = {
  ...S01_S10_Pro_Configs,
  ...S11_S21_Pro_Configs,
};

// 也導出各個拆分的配置以便單獨使用
export { S01_S10_Pro_Configs, S11_S21_Pro_Configs };
