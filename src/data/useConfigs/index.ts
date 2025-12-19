// 統一導出所有使用場景配置
export type { UseModule, UseMeta, UseConfigsRecord } from './types';

// 導入各個使用場景配置
import { FullLandingPage_Config } from './FullLandingPage';
import { PricingPage_Config } from './PricingPage';
import { Dashboard_Config } from './Dashboard';
import { Onboarding_Config } from './Onboarding';
import { AboutPage_Config } from './AboutPage';
import { ContactPage_Config } from './ContactPage';
import { BlogPage_Config } from './BlogPage';
import { ProductPage_Config } from './ProductPage';
import { PortfolioPage_Config } from './PortfolioPage';
import { FAQPage_Config } from './FAQPage';
import { LoginSignup_Config } from './LoginSignup';
import type { UseModule } from './types';

// 合併所有配置
export const useModules: Record<string, UseModule> = {
  FullLandingPage: FullLandingPage_Config,
  PricingPage: PricingPage_Config,
  Dashboard: Dashboard_Config,
  Onboarding: Onboarding_Config,
  AboutPage: AboutPage_Config,
  ContactPage: ContactPage_Config,
  BlogPage: BlogPage_Config,
  ProductPage: ProductPage_Config,
  PortfolioPage: PortfolioPage_Config,
  FAQPage: FAQPage_Config,
  LoginSignup: LoginSignup_Config,
};

// 導出各個配置（可選）
export {
  FullLandingPage_Config,
  PricingPage_Config,
  Dashboard_Config,
  Onboarding_Config,
  AboutPage_Config,
  ContactPage_Config,
  BlogPage_Config,
  ProductPage_Config,
  PortfolioPage_Config,
  FAQPage_Config,
  LoginSignup_Config,
};

// 便利函數：獲取所有使用場景 ID
export const getAllUseIds = (): string[] => {
  return Object.keys(useModules);
};

// 便利函數：根據 ID 獲取配置
export const getUseById = (id: string): UseModule | undefined => {
  return useModules[id];
};
