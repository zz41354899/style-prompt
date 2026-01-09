import React from 'react';
import { SubPageLayout } from '@/components/SubPageLayout';

interface ProSubPageLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

/**
 * Pro 版本的子頁面佈局
 * 現在使用共用的 SubPageLayout 並傳入 variant="pro"
 */
export const ProSubPageLayout: React.FC<ProSubPageLayoutProps> = ({ children, title, subtitle }) => {
    return (
        <SubPageLayout title={title} subtitle={subtitle} variant="pro">
            {children}
        </SubPageLayout>
    );
};
