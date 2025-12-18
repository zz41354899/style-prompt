import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-TW' ? 'en' : 'zh-TW';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-36 left-1/2 -translate-x-1/2 md:bottom-6 md:left-auto md:translate-x-0 md:right-6 z-50 flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-200"
      title={i18n.language === 'zh-TW' ? 'Switch to English' : '切換至中文'}
    >
      <Languages size={20} />
      <span className="font-medium">{i18n.language === 'zh-TW' ? 'EN' : '中文'}</span>
    </button>
  );
};
