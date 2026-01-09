import React from 'react';
import { Footer } from '@/components/landing/Footer';

/**
 * Pro 版本的 Footer
 * 現在使用共用的 Footer 並傳入 variant="pro"
 */
export const ProFooter: React.FC = () => {
    return <Footer variant="pro" />;
};
