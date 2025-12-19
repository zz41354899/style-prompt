// 重構後的行業配置 - 現在從模組化文件導入
// 這個文件保留以維持向後兼容性

// 導出所有配置（從新的模組化結構）
export { industryModules, getAllIndustryIds, getIndustryById } from './industryConfigs/index';

// 導出各組配置（精簡版 - 6 個最適合 Supabase 的 5 星產業）
export { 
  SaaS_Config,
  Education_Config,
  Fitness_Config,
  Community_Config,
  Booking_Config,
  ContentPlatform_Config
} from './industryConfigs/index';

// 導出型別
export type { 
  IndustryModule, 
  IndustryMeta, 
  IndustryConfigsRecord 
} from './industryConfigs/index';
