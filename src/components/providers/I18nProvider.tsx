'use client';

import { useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

import zhTW from '@/locales/zh-TW.json';
import en from '@/locales/en.json';

const resources = {
  'zh-TW': {
    translation: zhTW,
  },
  en: {
    translation: en,
  },
};

const getInitialLanguage = (): string => {
  // For SSR consistency, always return zh-TW initially
  // Language switching will happen after hydration
  return 'zh-TW';
};

// 同步初始化 i18n - 必須在模組級別確保 SSR 一致性
if (!i18n.isInitialized) {
  console.log('I18n: 模組級別初始化，強制使用 zh-TW');
  i18n.use(initReactI18next).init({
    resources,
    lng: 'zh-TW', // 強制使用中文確保 SSR 一致
    fallbackLng: 'zh-TW',
    interpolation: {
      escapeValue: false,
    },
  });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // i18n is already initialized at module level
  // Just return the provider
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
