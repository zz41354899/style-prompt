'use client';

import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'floating' | 'sidebar';
}

export const LanguageSwitcher = ({ variant = 'floating' }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const resolvedLanguage = i18n.resolvedLanguage || i18n.language;
  const isZh = resolvedLanguage?.toLowerCase().startsWith('zh');

  const toggleLanguage = () => {
    const newLang = isZh ? 'en' : 'zh-TW';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  if (variant === 'sidebar') {
    return (
      <button
        onClick={toggleLanguage}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 border border-white/10"
        title={isZh ? 'Switch to English' : '切換至中文'}
      >
        <Languages size={18} />
        <span className="font-medium text-sm">{isZh ? 'Switch to English' : '切換至中文'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-200"
      title={isZh ? 'Switch to English' : '切換至中文'}
    >
      <Languages size={20} />
      <span className="font-medium">{isZh ? 'EN' : '中文'}</span>
    </button>
  );
};
