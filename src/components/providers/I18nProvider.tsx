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
  if (typeof window === 'undefined') return 'zh-TW';
  
  const stored = localStorage.getItem('language');
  if (stored === 'en' || stored === 'zh-TW') return stored;
  
  const browserLang = navigator.language?.toLowerCase() || '';
  if (browserLang.startsWith('en')) return 'en';
  return 'zh-TW';
};

// 同步初始化 i18n
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'zh-TW',
    interpolation: {
      escapeValue: false,
    },
  });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.use(initReactI18next).init({
        resources,
        lng: getInitialLanguage(),
        fallbackLng: 'zh-TW',
        interpolation: {
          escapeValue: false,
        },
      }).then(() => {
        setIsReady(true);
      });
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
