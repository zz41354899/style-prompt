// 統一導出所有行業配置
export type { IndustryModule, IndustryMeta, IndustryConfigsRecord } from './types';

// 導入各個行業配置 (精簡版 - 6 個最適合 Supabase 的 5 星產業)
import { SaaS_Config } from './SaaS';
import { Education_Config } from './Education';
import { Fitness_Config } from './Fitness';
import { Community_Config } from './Community';
import { Booking_Config } from './Booking';
import { ContentPlatform_Config } from './ContentPlatform';
import type { IndustryModule } from './types';

// 合併所有配置 (精簡版 - 只保留 5 星產業)
export const industryModules: Record<string, IndustryModule> = {
  SaaS: SaaS_Config,
  Education: Education_Config,
  Fitness: Fitness_Config,
  Community: Community_Config,
  Booking: Booking_Config,
  ContentPlatform: ContentPlatform_Config,
};

// 導出各個配置（可選）
export {
  SaaS_Config,
  Education_Config,
  Fitness_Config,
  Community_Config,
  Booking_Config,
  ContentPlatform_Config,
};

// 便利函數：獲取所有行業 ID
export const getAllIndustryIds = (): string[] => {
  return Object.keys(industryModules);
};

// 便利函數：根據 ID 獲取配置
export const getIndustryById = (id: string): IndustryModule | undefined => {
  return industryModules[id];
};
