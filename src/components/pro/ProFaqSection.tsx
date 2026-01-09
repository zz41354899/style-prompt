import React from 'react';
import { FaqSection } from '@/components/landing/FaqSection';

/**
 * Pro 版本的 FAQ Section
 * 現在使用共用的 FaqSection 並傳入 variant="pro"
 */
export const ProFaqSection: React.FC = () => {
    return <FaqSection variant="pro" />;
};
