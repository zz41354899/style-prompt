'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Filter, X } from 'lucide-react';
import { CATEGORIES, type Category } from '../../data/styles';

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onCategoryChange: (category: Category | null) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const categories = Object.values(CATEGORIES);

  return (
    <div className="relative">
      {/* 篩選按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
          selectedCategory
            ? 'bg-purple-500/10 border-purple-500/30 text-purple-300'
            : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
        }`}
      >
        <Filter size={16} />
        <span className="text-sm font-medium">
          {selectedCategory ? t(`categories.${selectedCategory}`, { defaultValue: selectedCategory }) : t('filters.filter_by_category')}
        </span>
        {selectedCategory && (
          <X
            size={14}
            className="ml-1 hover:text-purple-200"
            onClick={(e) => {
              e.stopPropagation();
              onCategoryChange(null);
            }}
          />
        )}
      </button>

      {/* 下拉選單 */}
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* 選單內容 */}
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-white/10 rounded-lg shadow-xl z-20 overflow-hidden">
            {/* 全部選項 */}
            <button
              onClick={() => {
                onCategoryChange(null);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                !selectedCategory
                  ? 'bg-purple-500/10 text-purple-300'
                  : 'text-white/80 hover:bg-white/5'
              }`}
            >
              {t('filters.all')}
            </button>

            {/* 分隔線 */}
            <div className="border-t border-white/5" />

            {/* 分類選項 */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-500/10 text-purple-300'
                    : 'text-white/80 hover:bg-white/5'
                }`}
              >
                {t(`categories.${category}`, { defaultValue: category })}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
